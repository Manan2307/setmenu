import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/components/EndOrder.css'

const EndOrder = () => {
	return (
		<div className="succesful-order">
			<img
				className="succesful-order__image"
				src={process.env.PUBLIC_URL+"/img/illustrations/order.png"}
				alt="order"
			/>
			<h1>Your order was successfully placed {'😄'}</h1>
			<br />
			<p>In a few minutes your food will arrive at the table!</p>
			{/* <Link className="landing__button__main landing__button" to="/">
				<span>Go to Menu</span>
				<img
					className="landing__button--img"
					src={process.env.PUBLIC_URL+"/img/icons/arrow-right.svg"}
					alt="→"
				/>
			</Link> */}
		</div>
	)
}

export default EndOrder
