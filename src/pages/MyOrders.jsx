import React, { useContext, useEffect, useState } from 'react'
import UserPanelLayout from '../components/UserPanelLayout'
import Notiflix from 'notiflix'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import { AuthContext } from '../components/Auth'
import { Navigate } from 'react-router-dom'
import { database } from '../firebaseConfig'
import '../assets/css/pages/UserPanel.css'
import '../assets/css/components/MyOrders.css'

const MyOrders = () => {
	const { currentUser } = useContext(AuthContext)
	const [orders, setOrders] = useState([])
	const [DeleteOrder, setDeleteOrder] = useState('')
	const [DeleteModal, setDeleteModal] = useState(false)
	const [loaders, setLoaders] = useState({
		ordersLoader: true,
	})

	useEffect(() => {
		document.title = 'SetMenu - My Orders'
		Notiflix.Notify.init({ position: 'right-bottom' })
		getOrders()
	}, [])

	const getOrders = () => {
		try {
			database
				.collection('orders')
				.where('idUser', '==', currentUser.uid)
				.onSnapshot((querysnapshot) => {
					const docs = []

					setLoaders({
						...loaders,
						ordersLoader: true,
					})

					querysnapshot.forEach((doc) => {
						docs.push({ ...doc.data(), id: doc.id })
					})

					setOrders(docs)

					setLoaders({
						...loaders,
						ordersLoader: false,
					})
				})
		} catch (error) {
			Notiflix.Notify.failure(
				'An error occurred while fetching the information. Please try again!'
			)
		}
	}

	const onDeleteOrder = (id) => {
		setDeleteOrder(id)
		setDeleteModal(true)
	}

	const confirmDeleteOrder = async () => {
		setDeleteModal(false)
		try {
			await database.collection('orders').doc(DeleteOrder).delete()
			Notiflix.Notify.success('Food was removed correctly!')
		} catch (error) {
			Notiflix.Notify.failure(
				'Something went wrong while trying to delete the order. Please try again!'
			)
		}
		setDeleteOrder('')
	}

	if (currentUser) {
		return (
			<UserPanelLayout title="My Orders">
				{DeleteModal && (
					<Modal
						isOrders
						closeModal={(value) => setDeleteModal(value)}
						setDeleteOrder={(value) => setDeleteOrder(value)}
					>
						<p>Do you want to delete this order?</p>
						<div>
							<button
								className="modal__container__button"
								onClick={() => setDeleteModal(false)}
							>
								Cancel
							</button>
							<button
								onClick={() => confirmDeleteOrder()}
								className="modal__container__button modal__container__button--red"
							>
								Remove
							</button>
						</div>
					</Modal>
				)}
				<section>
					{loaders.ordersLoader ? (
						<Loader />
					) : (
						<>
							{orders.length === 0 ? (
								<div className="no-orders">
									<span>You still have no orders!</span>
								</div>
							) : (
								<>
									{orders.map((order) => {
										return (
											<div key={order.id} className="order-container">
												<div className="order-container__header">
													<h2>Table {order.table}</h2>
													<button
														onClick={() => onDeleteOrder(order.id)}
														className="order-container__header-button"
													>
														<img src="/img/icons/trash.svg" alt="Remove" />
													</button>
												</div>
												<br />
												<hr />
												<div className="order-container-row">
													<h4>Name</h4>
													<h4>Quantity</h4>
													<h4>Price</h4>
												</div>
												{order.products.map((product) => {
													return (
														<div
															key={product.id}
															className="order-container-row"
														>
															<span>{product.name}</span>
															<span>{product.amount}</span>
															<span>$ {product.price}</span>
														</div>
													)
												})}
												<br />
												<hr />
												<br />
												<h4>Observations</h4>
												<br />
												<p>{order.Observations}</p>
												<br />
												<hr />
												<br />
												<p className="total-order">
													<strong>Total:</strong> ${order.total}
												</p>
												<br />
											</div>
										)
									})}
								</>
							)}
						</>
					)}
				</section>
			</UserPanelLayout>
		)
	}
	return <Navigate to="/" />
}

export default MyOrders
