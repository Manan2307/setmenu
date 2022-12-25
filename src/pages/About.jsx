import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/pages/About.css'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <div className="about-container">
      <header className="header-about">
        <Link className="header-about__logo" to="/">
          <img
            className="header-about__logo--img"
            //src {"/img/logos/setmenu-whitelogo.png"}
            src={process.env.PUBLIC_URL + "/img/logos/setmenu-whitelogo.png"}
            alt="logo" />
        </Link>
      </header>
      <main className="fadeIn about-container__main">
        <h1 className="about-container__main--h1">
          About Us
        </h1>
        <br />
        <br />
        <p className="about-container__main--p">
          SetMenu is a company that provides a platform for restaurants to create and manage their online menus.
          Our goal is to make it easy for restaurants to showcase their offerings and for customers to find and order the dishes they love.
          <br />SetMenu was founded in 2022 by a technology enthusiasts who saw an opportunity to improve the way restaurants share their menus with the world.
          We are constantly working to improve our platform and add new features that help restaurants succeed. If you are a restaurant or food business owner or manager and would like to learn more about how SetMenu can help you grow your business, please don't hesitate to contact us.
          <br />We would love to hear from you!
        </p>
      </main>
      <div>
        <img
          className="about-container__illustration"
          src={process.env.PUBLIC_URL + "/img/illustrations/landing.svg"}
          alt="Restaurant" />
      </div>
    </div>
      <div><Footer /></div>
    </>

  )
}

export default About;
