import React, { useContext, useEffect, useState } from 'react'
import Notiflix from 'notiflix'
import UserPanelLayout from '../components/UserPanelLayout'
import Modal from '../components/Modal'
import Loader from '../components/Loader'
import { AuthContext } from '../components/Auth'
import { Navigate } from 'react-router-dom'
import { database } from '../firebaseConfig'
import { Link } from 'react-router-dom'
import '../assets/css/pages/UserPanel.css'
import '../assets/css/components/MyMenu.css'
import Footer from '../components/Footer'

const MyMenu = () => {
	const InitialStateInputValues = {
		name: '',
		price: '',
		category: '',
		description: '',
	}
	const {currentUser} = useContext(AuthContext)
	const [openModal, setOpenModal] = useState(false)
	const [NewFood, setNewFood] = useState(InitialStateInputValues)
	const [foods, setfoods] = useState([])
	const [active, setActive] = useState(false)
	const [temporaryFoodEdit, settemporaryFoodEdit] = useState('')
	const [temporaryFoodRemove, settemporaryFoodRemove] = useState('')
	const [ModalDelete, setModalDelete] = useState(false)
	const [loaders, setLoaders] = useState({
		foodsLoader: true,
	})

	useEffect(() => {
		document.title = 'SetMenu - My Menu'
		Notiflix.Notify.init({ position: 'right-bottom' })
		getfoods()
	}, [])

	const handleInput = (event) => {
		setNewFood({
			...NewFood,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		document
			.querySelectorAll('.newfoodForm')
			.forEach((input) => (input.disabled = true))

		if (temporaryFoodEdit) {
			await confirmEditFood()
		} else {
			await addfood()
		}

		document
			.querySelectorAll('.newfoodForm')
			.forEach((input) => (input.disabled = false))
		setOpenModal(false)
	}

	const onEditFood = async (id) => {
		settemporaryFoodEdit(id)
		try {
			const doc = await database.collection('foods').doc(id).get()
			setNewFood(doc.data())
			setOpenModal(true)
		} catch (error) {
			Notiflix.Notify.failure('Something went wrong. Please try again!')
		}
	}
	const onDeleteFood = (id) => {
		settemporaryFoodRemove(id)
		setModalDelete(true)
	}

	const confirmDeleteFood = async () => {
		setModalDelete(false)
		try {
			await database.collection('foods').doc(temporaryFoodRemove).delete()
			Notiflix.Notify.success('Food was removed correctly!')
		} catch (error) {
			Notiflix.Notify.failure(
				'Something went wrong while trying to delete the information. Please try again!'
			)
		}
		settemporaryFoodRemove('')
	}

	const confirmEditFood = async () => {
		try {
			await database.collection('foods').doc(temporaryFoodEdit).update(NewFood)
			Notiflix.Notify.success('The food was updated correctly!')
		} catch (error) {
			Notiflix.Notify.failure('Something went wrong. Please try again!')
		}
		setNewFood(InitialStateInputValues)
		settemporaryFoodEdit('')
	}

	const getfoods = async () => {
		try {
			database
				.collection('foods')
				.where('idUser', '==', currentUser.uid)
				.onSnapshot((querysnapshot) => {
					const docs = []

					setLoaders({
						...loaders,
						foodsLoader: true,
					})

					querysnapshot.forEach((doc) => {
						docs.push({ ...doc.data(), id: doc.id })
					})

					setfoods(docs)

					setLoaders({
						...loaders,
						foodsLoader: false,
					})
				})
		} catch (error) {
			Notiflix.Notify.failure(
				'An error occurred while fetching the information. Please try again!'
			)
		}
	}

	const addfood = async () => {
		const newfood = {
			...NewFood,
			price: parseInt(NewFood.price, 10),
			idUser: currentUser.uid,
		}

		setLoaders({
			...loaders,
			newfoodLoader: true,
		})

		try {
			await database.collection('foods').doc().set(newfood)
			Notiflix.Notify.success('Food was added correctly!')
		} catch (error) {
			Notiflix.Notify.failure(
				'Something went wrong while trying to send the information. Please try again!'
			)
			setOpenModal(false)
		}

		setLoaders({
			...loaders,
			newfoodLoader: false,
		})

		setNewFood(InitialStateInputValues)
	}

	if (currentUser) {
		return (
			<UserPanelLayout
				isMyMenu
				title="My Menu"
				setActive={(value) => setActive(value)}
				openModal={(value) => setOpenModal(value)}
			>
				{ModalDelete && (
					<Modal
						isMyMenu
						settemporaryFoodEdit={(value) => settemporaryFoodEdit(value)}
						closeModal={(value) => setModalDelete(value)}
					>
						<p>Do you want to remove this item?</p>
						<div>
							<button
								className="modal__container__button"
								onClick={() => setModalDelete(false)}
							>
								No
							</button>
							<button
								onClick={() => confirmDeleteFood()}
								className="modal__container__button modal__container__button--red"
							>
								Yes
							</button>
						</div>
					</Modal>
				)}
				{openModal && (
					<Modal
						isMyMenu
						closeModal={(value) => setOpenModal(value)}
						settemporaryFoodEdit={(value) => settemporaryFoodEdit(value)}
					>
						<form onSubmit={handleSubmit} className="modal__new-food__form">
							<h2>{temporaryFoodEdit ? 'Edit' : 'Add'}</h2>
							<br />
							<label>
								Name
								<input
									//placeholder="Pav Bhaji..."
									value={NewFood.name}
									type="text"
									name="name"
									onChange={handleInput}
									required
									maxLength="20"
									className="input-modal__new-food newfoodForm"
								/>
							</label>
							<label>
								Category
								<input
									//placeholder="Pav Bhaji..."
									value={NewFood.category}
									type="text"
									name="category"
									onChange={handleInput}
									required
									maxLength="20"
									className="input-modal__new-food newfoodForm"
								/>
							</label>
							<label>
								Price
								<input
									//placeholder="200..."
									value={NewFood.price}
									type="number"
									name="price"
									onChange={handleInput}
									required
									className="input-modal__new-food newfoodForm"
								/>
							</label>
							<label>
								Description
								<textarea
									//placeholder=""
									value={NewFood.description}
									type="text"
									name="description"
									onChange={handleInput}
									required
									className="input-modal__new-food input-modal__new-food--textarea newfoodForm"
								/>
							</label>
							<input
								type="submit"
								className="modal__container__button newfoodForm"
								value={temporaryFoodEdit ? 'Edit Food' : 'Add Food'}
							/>
						</form>
					</Modal>
				)}
				<section className="my-menu__container">
					{active && (
						<div className="menu-link-qr fadeIn">
							<p>
								Your Menu is available at:
								<br />
								<Link
									className="menu-link-qr__link"
									to={`/menu/${currentUser.uid}`}
								>{` ${window.location.origin.toString()}/#/menu/${
									currentUser.uid
								}`}</Link>
							</p>
							<a
								className="menu-link-qr__qr"
								role="button"
								href={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://www.setmenu.live/#/menu/${currentUser.uid}`}
								rel="noopener noreferrer"
								target="_blank"
							>
								Menu QR Code
								<img
									className="menu-link-qr__qr--icon"
									src={process.env.PUBLIC_URL+"/img/icons/qrcode.svg"}
									alt="QR"
								/>
							</a>
						</div>
					)}
					{loaders.foodsLoader ? (
						<Loader />
					) : (
						<>
							{foods.length === 0 ? (
								<div className="my-menu__no-foods">
									<span>You still have no food on your Menu!</span>
								</div>
							) : (
								<>
									{foods.map((food) => {
										return (
											<div key={food.id} className="food-container">
												<h2>{food.name}</h2>
												<br />
												<p>{food.category}</p>
												<br />
												<p>{food.description}</p>
												<br />
												<strong>₹ {food.price}</strong>
												<div className="food-container__buttons">
													<button
														className="food-container-button food-container__button-edit"
														onClick={() => onEditFood(food.id)}
													>
														Edit
													</button>
													<button
														className="food-container-button food-container__button-delete"
														onClick={() => onDeleteFood(food.id)}
													>
														Remove
													</button>
												</div>
											</div>
										)
									})}
								</>
							)}
						</>
					)}
				</section>
			   <div><Footer/></div>
			</UserPanelLayout>
			
		)
	}
	return <Navigate to="/" />
}

export default MyMenu
