import React, { useEffect, useState, useContext } from 'react'
import Loader from './Loader'
import app from '../firebaseConfig'
import SignInSocial from './SignInSocial'
import { AuthContext } from './Auth'
import { Navigate } from 'react-router-dom'

const Login = () => {
	const [form, setValues] = useState({})
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState({})
	const { currentUser } = useContext(AuthContext)

	useEffect(() => {
		document.title = 'SetMenu - Login'
	}, [])

	const handleInput = (event) => {
		setValues({
			...form,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setErrors({})
		setLoading(true)
		document
			.querySelectorAll('input')
			.forEach((input) => (input.disabled = true))
		app
			.auth()
			.signInWithEmailAndPassword(form.email, form.password)
			.catch((err) => {
				if (
					err.code === 'auth/user-not-found' ||
					err.code === 'auth/wrong-password'
				) {
					setErrors({
						incorrect: true,
					})
				} else {
					setErrors({
						unexpected: true,
					})
				}
			})
		document
			.querySelectorAll('input')
			.forEach((input) => (input.disabled = false))
		setLoading(false)
	}

	if (currentUser) {
		return <Navigate to="/" />
	}

	return (
		<div className="login-register-container__grid">
			<h1>Log in</h1>
			<form onSubmit={handleSubmit} className="login-grid">
				<label className="login-register-form__label">
					<img
						className="login-register-form__label__icon"
						src={process.env.PUBLIC_URL+"/img/icons/mail.svg"}
						alt="User"
					/>
					<input
						name="email"
						placeholder="Email"
						className="login-register-form__input"
						type="email"
						required
						onChange={handleInput}
					/>
				</label>
				<label className="login-register-form__label">
					<img
						className="login-register-form__label__icon"
						src={process.env.PUBLIC_URL+"/img/icons/padlock.svg"}
						alt="User"
					/>
					<input
						name="password"
						placeholder="Password"
						className="login-register-form__input"
						type="password"
						required
						onChange={handleInput}
					/>
				</label>
				<input
					className="login-register-form__button"
					type="submit"
					value="Log in"
				/>
			</form>
			<SignInSocial setErrors={(e) => setErrors(e)} />
			{loading && <Loader />}
			<div className="login-register__errors">
				<span>
					<ul>
						{errors.incorrect && (
							<li className="login-register__errors--li">
								Oops! The email or password is incorrect.
							</li>
						)}
						{errors.unexpected && (
							<li className="login-register__errors--li">
								An error occurred while sending the information. Please try to again!
							</li>
						)}
						{errors.facebook && (
							<li className="login-register__errors--li">
								An account with the same email address already exists
								email at a provider associated with this email address
								email. Try to login with Email or Google!
							</li>
						)}
					</ul>
				</span>
			</div>
		</div>
	)
}

export default Login
