import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/pages/About.css'
import Footer from '../components/Footer'

const Privacy = () => {
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
                        Privacy Policy
                    </h1>
                    <br />
                    <br />
                    <p className="about-container__main--p">
                        Sure, here is a sample privacy policy for a website called "SetMenu":
                        <br/><br/>
                        Privacy Policy for SetMenu
                        <br/>
                        This privacy policy applies to the SetMenu website, located at www.setmenu.live .
                        <br/><br/>
                        Collection of Personal Information
                        <br/>
                        SetMenu collects personal information from users when they create an account or place an order on the website. This personal information may include name, email address, phone number, and payment information.
                        <br/><br/>
                        Use of Personal Information
                        <br/>
                        SetMenu uses the personal information collected from users for the following purposes:
                        <br/>
                        To process and fulfill orders placed on the website
                        To send updates and promotional materials related to SetMenu
                        To personalize the user's experience on the website
                        SetMenu may also use personal information for research and analytics purposes.
                        <br/><br/>
                        Sharing of Personal Information
                        <br/>
                        SetMenu may share personal information with third parties in the following cases:
                        <br/>
                        To process and fulfill orders placed on the website
                        To send updates and promotional materials related to SetMenu
                        To personalize the user's experience on the website
                        To comply with legal requirements
                        Security of Personal Information
                        <br/>
                        SetMenu takes reasonable measures to protect the personal information of users. This includes using secure servers and encryption for sensitive information.
                        <br/>
                        However, SetMenu cannot guarantee the security of personal information transmitted to the website. Users are encouraged to take additional precautions to protect their personal information, such as using strong passwords and avoiding sharing personal information with others.
                        <br/><br/>
                        Cookies
                        <br/>
                        SetMenu uses cookies to store and track information about users' visits to the website. These cookies are used to personalize the user's experience on the website and to improve the website's functionality.
                        <br/>
                        Users can disable cookies in their web browser settings. However, doing so may affect the functionality of the SetMenu website.
                        <br/><br/>
                        Changes to This Privacy Policy
                        <br/>
                        SetMenu reserves the right to update this privacy policy at any time. Any changes to this policy will be posted on this page. Users are encouraged to review this privacy policy regularly for any updates or changes.
                        <br/><br/>
                        Contact Us
                        <br/>
                        If you have any questions about this privacy policy or the collection and use of personal information by SetMenu, please contact us at business.setmenu@gmail.com.
                    </p>
                </main>
            </div>
            <div><Footer /></div>
        </>

    )
}

export default Privacy;
