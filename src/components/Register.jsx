import React, { useEffect, useState, useContext } from 'react'
import Loader from './Loader'
import app from '../firebaseConfig'
import SignInSocial from './SignInSocial'
import { AuthContext } from './Auth'
import { Navigate } from 'react-router-dom'

const Register = () => {
	const [form, setValues] = useState({})
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState({})
	const { currentUser } = useContext(AuthContext)

	useEffect(() => {
		document.title = 'SetMenu - Create Account'
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
		if (form.password === form.confirmPassword) {
			app
				.auth()
				.createUserWithEmailAndPassword(form.email, form.password)
				.then((userCredentials) => {
					return userCredentials.user.updateProfile({
						displayName: form.name,
					})
				})
				.catch((err) => {
					if (err.code === 'auth/email-already-in-use') {
						setErrors({
							email: true,
						})
					} else {
						setErrors({
							unexpected: true,
						})
					}
				})
		} else {
			setErrors({
				password: true,
			})
		}
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
			<h1>Create Account</h1>
			<form onSubmit={handleSubmit} className="regirter-grid">
				<label className="login-register-form__label regirter-grid--division">
					<img
						className="login-register-form__label__icon"
						src={process.env.PUBLIC_URL+"/img/icons/user.svg"}
						alt="User"
					/>
					<input
						name="name"
						placeholder="Name"
						className="login-register-form__input"
						type="text"
						required
						maxLength="30"
						onChange={handleInput}
					/>
				</label>
				<label className="login-register-form__label regirter-grid--division">
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
				<label className="login-register-form__label register-grid__correccion-icon">
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
						minLength="8"
						onChange={handleInput}
					/>
				</label>
				<label className="login-register-form__label register-grid__correccion-icon">
					<img
						className="login-register-form__label__icon"
						src={process.env.PUBLIC_URL+"/img/icons/padlock.svg"}
						alt="User"
					/>
					<input
						name="confirmPassword"
						placeholder="Confirm Password"
						className="login-register-form__input"
						type="password"
						required
						onChange={handleInput}
					/>
				</label>
				<input
					className="login-register-form__button regirter-grid--division"
					type="submit"
					value=" Create Account"
				/>
			</form>
			<SignInSocial setErrors={(e) => setErrors(e)} />
			{loading && <Loader />}
			<div className="login-register__errors">
				<span>
					<ul>
						{errors.password && (
							<li className="login-register__errors--li">
								Password Do Not Match!
							</li>
						)}
						{errors.email && (
							<li className="login-register__errors--li">
								Sorry! This Email is already registered.
							</li>
						)}
						{errors.unexpected && (
							<li className="login-register__errors--li">
								An error occurred while sending the information. Please try to again.
							</li>
						)}
						{errors.facebook && (
							<li className="login-register__errors--li">
								An account with the same email address already exists
								email at a provider associated with this email address
								email. Try to login with Email or Google.
							</li>
						)}
					</ul>
				</span>
			</div>
		</div>
	)
}

export default Register
