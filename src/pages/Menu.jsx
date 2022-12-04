import React, { useEffect, useState } from 'react'
import MenuItem from '../components/MenuItem'
import { database } from '../firebaseConfig'
import { Link, useParams } from 'react-router-dom'
import Notiflix from 'notiflix'
import NotFound from './NotFound'
import Modal from '../components/Modal'
import EndOrder from '../components/EndOrder'
import '../assets/css/pages/Home.css'

const Menu = ({ match }) => {
	//const id = match.params.id
	const { id } = useParams();
	const [active, setActive] = useState(false)
	const [noMenu, setNoMenu] = useState(false)
	const [food, setFood] = useState([])
	const [trolley, settrolley] = useState([])
	const [trolleyNumber, settrolleyNumber] = useState(0)
	const [openModal, setOpenModal] = useState(false)
	const [TableUser, setTableUser] = useState('')
	const [SuccessfulOrder, setSuccessfulOrder] = useState(false)
	const [Observations, setObservations] = useState('')

	const [searchtext, setsearchtext] = useState('')
	const [searchResult, setSearchResult] = useState([])

	useEffect(() => {
		document.title = 'SetMenu'
		getMenuState()
	}, [])

	const getFood = async () => {
		const foods = []
		try {
			const response = await database
				.collection('foods')
				.where('idUser', '==', id)
				.get()

			response.forEach((doc) => {
				foods.push({ ...doc.data(), id: doc.id })
			})
			setFood(foods)
			setActive(true)
		} catch (error) {
			Notiflix.Notify.failure(
				'Something went wrong while fetching the data from the menu. Please try again'
			)
		}
	}

	const addToCart = (food) => {
		settrolleyNumber(trolleyNumber + 1)
		if (trolley.some((item) => food.id === item.id)) {
			const index = trolley.findIndex((item) => item.id === food.id)
			const carttemporary = trolley
			carttemporary[index] = {
				...trolley[index],
				amount: trolley[index].amount + 1,
			}
			settrolley(carttemporary)
		} else {
			settrolley([...trolley, food])
		}
	}

	const deleteProductToCart = (id) => {
		const carttemporary = trolley
		const index = trolley.findIndex((item) => item.id === id)
		settrolleyNumber(trolleyNumber - trolley[index].amount)
		carttemporary.splice(index, 1)
		settrolley(carttemporary)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!trolley.length) {
			Notiflix.Notify.warning('You have no items in your shopping cart!')
		} else {
			document
				.querySelectorAll('.menuForm')
				.forEach((input) => (input.disabled = true))
			try {
				const NewOrder = {
					idUser: id,
					products: [...trolley],
					table: TableUser,
					Observations: Observations,
					total: trolleyTotal(),
				}
				await database.collection('orders').doc().set(NewOrder)
				Notiflix.Notify.success('The order was made correctly!')
				setSuccessfulOrder(true)
			} catch (error) {
				Notiflix.Notify.failure('Something went wrong. Please try again!')
				setOpenModal(false)
			}
			document
				.querySelectorAll('.menuForm')
				.forEach((input) => (input.disabled = false))
		}
	}

	const handleChange = (e) => {
		const text = e.target.value
		setsearchtext(text)

		const search = food.filter((food) => {
			return `${food.name}`.toLowerCase().includes(text.toLowerCase())
		})

		setSearchResult(search)
	}

	const trolleyTotal = () => {
		let total = 0
		trolley.forEach((food) => {
			total += food.price * food.amount
		})
		return total
	}

	const getMenuState = async () => {
		const menus = []
		try {
			const response = await database
				.collection('menus')
				.where('idUser', '==', id)
				.get()

			response.forEach((doc) => {
				menus.push({ ...doc.data(), id: doc.id })
			})
		} catch (error) {
			Notiflix.Notify.failure('Something went wrong!')
		}
		if (menus.length) {
			getFood()
		} else {
			setNoMenu(true)
		}
	}

	if (noMenu) {
		return <NotFound />
	}

	if (SuccessfulOrder) {
		return <EndOrder />
	}

	if (active) {
		return (
			<>
				{openModal && (
					<Modal closeModal={(value) => setOpenModal(value)} little>
						<div className="trolley-row">
							<h4>Product</h4>
							<h4>Price</h4>
							<h4>Quantity</h4>
							<h4>Remove</h4>
						</div>
						{!trolley.length && (
							<div className="no-products">
								There are no products in the cart yet!
							</div>
						)}
						{trolley.map((food) => {
							return (
								<div key={food.id} className="trolley-row">
									<span>{food.name}</span>
									<span>$ {food.price}</span>
									<span>{food.amount}</span>
									<button
										className="delete-product-cart"
										onClick={() => deleteProductToCart(food.id)}
									>
										x
									</button>
								</div>
							)
						})}
						<form className="form-order" onSubmit={handleSubmit}>
							<div className="trolley-total">
								<label>
							        	Table you are at:
									<input
										className="input-table menuForm"
										required
										value={TableUser}
										onChange={(e) => setTableUser(e.target.value)}
										type="number"
									/>
								</label>
							</div>
							<div className="trolley-total Observations">
								<h4>Observations</h4>
								<textarea
									className="Observations__textarea"
									onChange={(e) => setObservations(e.target.value)}
									placeholder="Jain or Non Jain..."
									type="text"
								/>
							</div>
							<div className="trolley-total">
								<p>
									<strong>Total: ${trolleyTotal()}</strong>
								</p>
							</div>
							<input
								type="submit"
								className="modal__container__button menuForm"
								value="Make an order"
							/>
						</form>
					</Modal>
				)}
				<div className="main-container">
					<header className="header">
						<Link className="header__logo__link" to="/">
							<img
								className="header__logo"
								src="/img/logos/SetMenu_blacklogo.png"
								alt="Logo"
							/>
						</Link>
						<input
							onChange={handleChange}
							className="header__input"
							type="text"
							placeholder="Search"
						/>
						<button
							onClick={() => setOpenModal(true)}
							className="header__button"
						>
							<div className="header__button__count">
								<span>{trolleyNumber}</span>
							</div>
							<img
								className="header__button__img"
								src="/img/icons/shopping-cart.svg"
								alt="Shop Car"
							/>
						</button>
					</header>
					<div className="main-container__title">
						<h1 className="main-container__title__h1">Menu</h1>
					</div>
					{food.length === 0 ? (
						<div className="no-food">
							<p>This menu has no food yet!</p>
						</div>
					) : (
						<>
							{!searchtext && (
								<section className="menu">
									{food.map((food) => {
										return (
											<MenuItem
												key={food.id}
												id={food.id}
												name={food.name}
												price={food.price}
												description={food.description}
												addToCart={(value) => addToCart(value)}
											/>
										)
									})}
								</section>
							)}
							{!searchResult.length && searchtext && (
								<div className="no-food">
									<p>{`It was not found: ${searchtext}`}</p>
								</div>
							)}
							{searchResult.length && searchtext && (
								<section className="menu">
									{searchResult.map((food) => {
										return (
											<MenuItem
												key={food.id}
												id={food.id}
												name={food.name}
												price={food.price}
												description={food.description}
												addToCart={(value) => addToCart(value)}
											/>
										)
									})}
								</section>
							)}
						</>
					)}
				</div>
			</>
		)
	}
	return (
		<div className="fullscreen-loader">
			<img
				className="fullscreen-loader__img"
				src="/img/logos/SetMenu_blacklogo.png"
				alt="Logo"
			/>
		</div>
	)
}

export default Menu
