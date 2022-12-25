import React from 'react';
import { Link } from 'react-router-dom'
import "../assets/css/components/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Use</Link>
        </div>
        <div className="footer-copyright">
          Copyright &copy; 2022 SetMenu
        </div>
      </div>
    </footer>
  );
};

export default Footer;