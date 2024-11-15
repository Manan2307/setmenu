import React, { useContext, useEffect } from 'react'
import { AuthContext } from './Auth'
import { database } from '../firebaseConfig'
import HeaderUserPanel from './HeaderUserPanel'
import Notiflix from 'notiflix'

const UserPanelLayout = ({
	children,
	title,
	isMyMenu,
	openModal,
	setActive,
}) => {
	const { currentUser } = useContext(AuthContext)
	const switchInput = document.getElementById('switch')

	useEffect(() => {
		if (isMyMenu) {
			getMenuData()
		}
	}, [])

	const handleCheck = async () => {
		if (switchInput.checked) {
			setActive(true)
			const newMenu = {
				idUser: currentUser.uid,
			}

			try {
				switchInput.disabled = true
				await database.collection('menus').doc().set(newMenu)
				switchInput.disabled = false
			} catch (error) {
				Notiflix.Notify.failure('Something went wrong!')
				switchInput.disabled = false
			}
		} else {
			setActive(false)
			switchInput.disabled = true
			database
				.collection('menus')
				.where('idUser', '==', currentUser.uid)
				.get()
				.then(function (querySnapshot) {
					var batch = database.batch()

					querySnapshot.forEach(function (doc) {
						batch.delete(doc.ref)
					})
					return batch.commit()
				})
				.then(() => {
					switchInput.disabled = false
				})
				.catch((err) => {
					Notiflix.Notify.failure('Something went wrong!')
				})
		}
	}

	const getMenuData = async () => {
		const switchInput = document.getElementById('switch')
		const menus = []
		try {
			const response = await database
				.collection('menus')
				.where('idUser', '==', currentUser.uid)
				.get()

			response.forEach((doc) => {
				menus.push({ ...doc.data(), id: doc.id })
			})
		} catch (error) {
			Notiflix.Notify.failure('Something went wrong!')
		}
		if (menus.length) {
			switchInput.checked = true
			setActive(true)
		}
	}

	return (
		<div className="user-panel-container">
			<div className="user-panel">
				<HeaderUserPanel currentUser={currentUser} />
				<div className="user-panel__title">
					<h1 className="user-panel__title--h1">{title}</h1>
					{isMyMenu && (
						<button
							onClick={() => openModal(true)}
							className="user-panel__title--button"
						>
							Add food
							<img
								className="user-panel__title--button-icon"
								src={process.env.PUBLIC_URL+"/img/icons/plus-circle.svg"}
								alt="+"
							/>
						</button>
					)}
					{isMyMenu && (
						<div className="switch-container">
							<span className="switch-container__text">Publish</span>
							<input
								type="checkbox"
								className="user-panel__switch_input"
								id="switch"
								onChange={handleCheck}
							/>
							<label className="user-panel__switch_label" htmlFor="switch">
								Toggle
							</label>
						</div>
					)}
				</div>
				{children}
			</div>
		</div>
	)
}

export default UserPanelLayout
