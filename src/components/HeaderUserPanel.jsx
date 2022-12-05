import React from 'react'
import app from '../firebaseConfig'
import { NavLink, Link } from 'react-router-dom'
import '../assets/css/pages/UserPanel.css'

const HeaderUserPanel = ({ currentUser }) => {
	const logOut = () => {
		app.auth().signOut()
	}
	return (
		<header className="user-panel__header">
			<Link className="user-panel__header__logo" to="/">
				<img
					className="user-panel__header__logo--img"
					src={process.env.PUBLIC_URL+"/img/logos/SetMenu_blacklogo.png"}
					alt="Logo"
				/>
			</Link>
			<ul className="user-panel__header__list">
				<li>
					<NavLink
						activeClassName="header-active-link"
						className="user-panel__header__link"
						to="/mymenu"
					>
						My Menu
					</NavLink>
				</li>
				<li>
					<NavLink
						activeClassName="header-active-link"
						className="user-panel__header__link"
						to="/myorders"
					>
						Orders
					</NavLink>
				</li>
			</ul>
			<div className="user-panel__profile">
				<img
					className="user-panel__profile__image"
					src={process.env.PUBLIC_URL+'/img/profile.png'}
					alt="Profile picture"
				/>
				<div className="user-panel__profile__text__container">
					<span className="user-panel__profile__text">
						{currentUser.displayName}
					</span>
					<span onClick={logOut} className="user-panel__profile__logout">
						Sign Out
					</span>
				</div>
			</div>
		</header>
	)
}

export default HeaderUserPanel
