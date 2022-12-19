import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <img src={process.env.PUBLIC_URL+"/img/logos/setmenu-whitelogo.png"} alt="SetMenu logo" className="logo" />
        <h1 className="title">About SetMenu</h1>
      </div>
      <div className="about-content">
        <p>
          SetMenu is a company that provides a platform for restaurants to create and manage their online menus. Our goal is to make it easy for restaurants to showcase their offerings and for customers to find and order the dishes they love.
        </p>
        <p>
          SetMenu was founded in 2020 by a team of food and technology enthusiasts who saw an opportunity to improve the way restaurants share their menus with the world. We are constantly working to improve our platform and add new features that help restaurants succeed.
        </p>
        <p>
          If you are a restaurant owner or manager and would like to learn more about how SetMenu can help you grow your business, please don't hesitate to contact us. We would love to hear from you!
        </p>
      </div>
      <div className="about-images">
        <img src={process.env.PUBLIC_URL+"/img/illustrations/login_register.png"} alt="Restaurant image" className="image" />
        {/* <img src={image2} alt="Restaurant image" className="image" /> */}
      </div>
    </div>
  );
};

export default About;
