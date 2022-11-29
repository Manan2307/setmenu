import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/css/components/Modal.css'

const Modal = ({
	children,
	closeModal,
	setTemporaryFoodEdit,
	isMyMenu,
	isOrders,
	setDeleteOrder,
	little,
}) => {
	return ReactDOM.createPortal(
		<div className={`modal ${little && 'little'}`}>
			<div
				onClick={() => {
					closeModal(false)
					if (isMyMenu) {
						setTemporaryFoodEdit('')
					}
					if (isOrders) {
						setDeleteOrder('')
					}
				}}
				className="modal__exitBackground"
			></div>
			<div className="modal__container">
				<button
					onClick={() => {
						closeModal(false)
						if (isMyMenu) {
							setTemporaryFoodEdit('')
						}
						if (isOrders) {
							setDeleteOrder('')
						}
					}}
					className="modal__container__exit"
				></button>
				{children}
			</div>
		</div>,
		document.getElementById('modal')
	)
}

export default Modal
