import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/pages/About.css'
import Footer from '../components/Footer'

const Contact = () => {
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
          Contact Us
        </h1>
        <br />
        <br />
        <p className="about-container__main--p">
          Mail Us at Business.setmenu@gmail.com
        </p>
      </main>
    </div>
      <div><Footer /></div>
    </>

  )
}

export default Contact;
