import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../components/Auth'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import MyMenu from '../pages/MyMenu'
import MyOrders from '../pages/MyOrders'
import NotFound from '../pages/NotFound'
import RegisterContainer from '../pages/RegisterContainer';
import LoginContainer from '../pages/LoginContainer'
import '../assets/css/index.css'
import Manan from "../pages/Manan";
import About from '../pages/About';
import Privacy from '../components/PrivacyPolicy'
import Terms from '../components/Terms'
import Contact from '../pages/Contact'

// const App = () => {
function App() {
	return (
		<>
		<AuthProvider>
				<Routes>
			     	<Route path="/" element={<Home/>} />
					<Route path="/setmenu" element={<Home/>} />
					<Route path="/manan" element={<Manan/>} />
					<Route path="/login" element={<LoginContainer/>} />
					<Route path="/register" element={<RegisterContainer/>} />
					<Route path="/mymenu" element={<MyMenu/>} />
					<Route path="/myorders" element={<MyOrders/>} />
					<Route path="/menu/:id" element={<Menu/>} />
					<Route element={<NotFound/>} />

					<Route path="/about" element={<About/>} />
					<Route path="/contact" element={<Contact/>} />
					<Route path="/privacy" element={<Privacy/>} />
					<Route path="/terms" element={<Terms/>} />
				</Routes>
		</AuthProvider>
		</>
	)
}

export default App
