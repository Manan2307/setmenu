import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/pages/UserPanel.css'
import UserPanelLayout from './UserPanelLayout'

const UserPanel = () => {
	return (
		<UserPanelLayout title="Main Menu">
			<section className="user-panel__main">
				<Link className="user-panel__main__link" to="/mymenu">
					<div className="main-menu-card card-1">
						<h2>Your Menu</h2>
						<div className="main-menu-card__arrow-container">
							<img
								className="main-menu-card__arrow-container--img"
								src={process.env.PUBLIC_URL+"/img/icons/arrow-card-1.svg"}
								alt="→"
							/>
						</div>
						<img
							className="main-menu-card--img-1"
							src={process.env.PUBLIC_URL+"/img/illustrations/card-1.png"}
							alt="Food"
						/>
					</div>
				</Link>
				<Link className="user-panel__main__link" to="/myorders">
					<div className="main-menu-card card-2">
						<h2>Your Orders</h2>
						<div className="main-menu-card__arrow-container">
							<img
								className="main-menu-card__arrow-container--img"
								src={process.env.PUBLIC_URL+"/img/icons/arrow-card-2.svg"}
								alt="→"
							/>
						</div>
						<img
							className="main-menu-card--img-2"
							src={process.env.PUBLIC_URL+"/img/illustrations/card-2.png"}
							alt="Food"
						/>
					</div>
				</Link>
			</section>
		</UserPanelLayout>
	)
}

export default UserPanel
