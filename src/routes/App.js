import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../components/Auth'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import MyMenu from '../pages/MyMenu'
import MyOrders from '../pages/MyOrders'
import NotFound from '../pages/NotFound'
import LoginRegisterContainer from '../pages/LoginRegisterContainer';
import Login from '../components/Login'
import '../assets/css/index.css'
import Manan from "../pages/Manan";

// const App = () => {
function App() {
	return (
		<>
		<AuthProvider>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/manan" element={<Manan/>} />
					<Route path="/login" element={<Login/>} />
					<Route path="/register" element={<LoginRegisterContainer/>} />
					<Route path="/mymenu" element={<MyMenu/>} />
					<Route path="/myorders" element={<MyOrders/>} />
					<Route path="/menu/:id" element={<Menu/>} />
					<Route element={<NotFound/>} />
				</Routes>
		</AuthProvider>
		</>
	)
}

export default App
