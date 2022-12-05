import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/pages/LandingPage.css'
import second from '../'

const LandingPage = () => {
	return (
		<div className="landing-container">
			<header className="header-landing">
				<Link className="header-landing__logo" to="/">
					<img
						className="header-landing__logo--img"
						//src {"/img/logos/SetMenu_whitelogo.png"}
						src={process.env.PUBLIC_URL + "/img/logos/SetMenu_whitelogo.png"}
						alt="logo"
					/>
				</Link>
				<div>
					<Link
						className="landing__button--header landing__button"
						to="/register"
					>
						Sign up for free
					</Link>
					<br />
					<Link className="header-landing__login" to="/login">
						<div>Log in</div>
					</Link>
				</div>
			</header>
			<main className="fadeIn landing-container__main">
				<h1 className="landing-container__main--h1">
					Improve the quality of your restaurant's menu.
				</h1>
				<br />
				<br />
				<p className="landing-container__main--p">
				      The finest software for creating digital menus is SetMenu.
				</p>
				<div className="landing-container__button-hero">
					{/* <Link
						className="landing__button__main landing__button__main-demo"
						to="/menu/py5Uygez0IfRaAEOM9x4IVLxssM2"
					>
						<span>Demo</span>
						<img
							className="landing__button--img"
							src={process.env.PUBLIC_URL +"/img/icons/arrow-right-black.svg"}
							alt="→"
						/>
					</Link> */}
					<Link
						className="landing__button__main landing__button"
						to="/register"
					>
						<span>Sign up for free</span>
						<img
							className="landing__button--img"
							src={process.env.PUBLIC_URL +"/img/icons/arrow-right.svg"}
							alt="→"
						/>
					</Link>
				</div>
			</main>
			<div>
				<img
					className="landing-container__illustration"
					src={process.env.PUBLIC_URL +"/img/illustrations/landing.svg"}
					alt="Restaurant"
				/>
			</div>
		</div>
	)
}

export default LandingPage
