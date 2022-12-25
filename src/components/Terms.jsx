import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/pages/About.css'
import Footer from '../components/Footer'

const Terms = () => {
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
                        Terms and Conditions
                    </h1>
                    <br />
                    <br />
                    <p className="about-container__main--p">
                        Terms and Conditions for SetMenu.
                        <br/>
                        This website, located at www.setmenu.com (the "Site"), is operated by SetMenu (referred to as "we," "us," or "our"). By accessing and using the Site, you agree to be bound by the following terms and conditions (the "Terms"). If you do not agree to these Terms, do not use the Site.
                        <br/><br/>
                        Use of the Site
                        <br/>
                        The Site is intended for personal and non-commercial use. You may not use the Site for any unlawful or fraudulent purpose. You may not use the Site to send spam or unsolicited email.
                        <br/><br/>
                        Intellectual Property
                        <br/>
                        All content on the Site, including text, graphics, logos, images, and software, is the property of SetMenu or its licensors and is protected by copyright and trademark laws. You may not use any content on the Site for commercial purposes without the express written consent of SetMenu.
                        <br/><br/>
                        Links to Other Websites
                        <br/>
                        The Site may contain links to third-party websites. These links are provided for your convenience and are not an endorsement of the content on these websites. SetMenu is not responsible for the content or privacy practices of these websites.
                        <br/><br/>
                        Privacy Policy
                        <br/>
                        Our privacy policy, which explains how we collect, use, and share your personal information, can be found at www.setmenu.live/privacy. By using the Site, you agree to the collection, use, and sharing of your personal information as described in our privacy policy.
                        <br/><br/>
                        Termination of Use
                        <br/>
                        SetMenu reserves the right to terminate or restrict your access to the Site at any time, without notice, for any reason, including if we believe that you have violated these Terms.
                        <br/><br/>
                        Changes to These Terms
                        <br/>
                        SetMenu reserves the right to update these Terms at any time. Any changes to these Terms will be posted on this page. It is your responsibility to review these Terms regularly for any updates or changes. Your continued use of the Site after any changes have been made constitutes your acceptance of the revised Terms.
                        <br/><br/>
                        Contact Us
                        <br/>
                        If you have any questions about these Terms or the Site, please contact us at business.setmenu@gmail.com.
                    </p>
                </main>
            </div>
            <div><Footer /></div>
        </>

    )
}

export default Terms;
