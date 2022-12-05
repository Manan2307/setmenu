import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import Notiflix from 'notiflix'
import '../assets/css/components/MenuItem.css'

const MenuItem = ({ id, name, price, description, addToCart }) => {
	const [openModal, setOpenModal] = useState(false)

	useEffect(() => {
		Notiflix.Notify.init({ position: 'right-bottom' })
	}, [])

	const handleClick = () => {
		const newItem = {
			id,
			name,
			description,
			price,
			amount: 1,
		}
		addToCart(newItem)
		Notiflix.Notify.success(`Added ${name} to cart.`)
		setOpenModal(false)
	}

	return (
		<>
			{openModal && (
				<Modal closeModal={(value) => setOpenModal(value)}>
					<h2>{name}</h2>
					<br />
					<p>{description}</p>
					<br />
					<p>
						<strong>$ {price}</strong>
					</p>
					<input
						onClick={handleClick}
						type="submit"
						className="modal__container__button newfoodForm"
						value="add to cart!"
					/>
				</Modal>
			)}
			<div onClick={() => setOpenModal(true)} className="menu__item">
				<div className="menu__item__circle">
					<img
						className="menu__item__circle__img"
						src={process.env.PUBLIC_URL+"/img/food/food.jpg"}
						alt="Pizza"
					/>
				</div>
				<div className="menu__item__content">
					<h3>{name}</h3>
					<br />
					<p>{description.slice(0, 20)}...</p>
					<br />
					<p>
						<strong>$ {price}</strong>
					</p>
				</div>
			</div>
		</>
	)
}

export default MenuItem
