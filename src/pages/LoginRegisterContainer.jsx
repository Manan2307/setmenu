import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import { Link, Navigate } from 'react-router-dom'
import '../assets/css/pages/LoginRegister.css'

const LoginRegisterContainer = () => {
	return (
		<div className="login-register">
			<div className="login-register__form">
				<Link to="/">
					<img
						className="login-register__form__logo"
						src="/img/logos/SetMenu_whitelogo.png"
						alt="Logo"
					/>
				</Link>
				{Navigate === '/login' ? <Login /> : <Register />}
				<div className="login-register__links-question">
					{Navigate === '/login' ? (
						<span>
							Do you already have an account?
							<Link
								className="login-register__form__question__link"
								to="/register"
							>
								<strong> Create Account</strong>
							</Link>
						</span>
					) : (
						<span>
							Do you already have an account?
							<Link
								className="login-register__form__question__link"
								to="/login"
							>
								<strong> Log in</strong>
							</Link>
						</span>
					)}
					<div className="login-register__form__links">
						<Link className="login-register__form__links--link" to="/">
							Terms and Conditions
						</Link>
						<Link className="login-register__form__links--link" to="/">
							Privacy Policy
						</Link>
						<Link className="login-register__form__links--link" to="/">
							Cookies
						</Link>
						<br />
						<br />
						<span className="login-register__form__links--link">
							© 2022 SetMenu.
						</span>
					</div>
				</div>
			</div>
			<div className="login-register__content">
				<span className="login-register__content__title">
			     	Don't let your restaurant stagnate in the digital age
				</span>
				<img
					className="login-register__content__image"
					src="/img/illustrations/login_register.png"
					alt="Illustration"
				/>
			</div>
		</div>
	)
}

export default LoginRegisterContainer
