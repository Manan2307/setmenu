import React from 'react'
import '../assets/css/components/SignInSocial.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Notiflix from 'notiflix'

const SignInSocial = ({ setErrors }) => {
	const googleProvider = new firebase.auth.GoogleAuthProvider()
	const facebookProvider = new firebase.auth.FacebookAuthProvider()

	const googleAuth = () => {
		// firebase
		// 	.auth()
		// 	.signInWithPopup(googleProvider)
		// 	.catch((err) => {
		// 		Notiflix.Notify.failure(
		// 			'Something went wrong trying to sign in with Google, please try again!'
		// 		)
		// 	})
		Notiflix.Notify.success(
			'Coming Soon!'
		)
	}

	const facebookAuth = () => {
		// firebase
		// 	.auth()
		// 	.signInWithPopup(facebookProvider)
		// 	.catch((err) => {
		// 		if (err.code === 'auth/account-exists-with-different-credential') {
		// 			setErrors({
		// 				facebook: true,
		// 			})
		// 		} else {
		// 			Notiflix.Notify.failure(
		// 				'Something went wrong while trying to log in with Facebook, please try again!'
		// 			)
		// 		}
		// 	})
		Notiflix.Notify.success(
			'Coming Soon!'
		)
	}

	return (
		<div className="sign-in-social">
			<hr className="sign-in-social__divider" />
			<div className="sign-in-social__container">
				<button
					onClick={googleAuth}
					className="sign-in-social__button sign-in-social__button--google"
				>
					<img
						className="sign-in-social__button--img"
						src={process.env.PUBLIC_URL + "/img/icons/google.svg"}
						alt="Google"
					/>
				</button>
				<button
					onClick={facebookAuth}
					className="sign-in-social__button sign-in-social__button--facebook"
				>
					<img
						className="sign-in-social__button--img"
						src={process.env.PUBLIC_URL + "/img/icons/facebook.svg"}
						alt="Facebook"
					/>
				</button>
			</div>
		</div>
	)
}

export default SignInSocial
