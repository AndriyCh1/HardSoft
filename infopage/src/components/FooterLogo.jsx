import React from 'react'
import '../App.css';
import logoIcon from "../assets/logo-footer.svg";

const FooterLogo = () => {
    return (
      <div className="footer-left__logo">
        <img src={logoIcon} alt="logo" />
      </div>
    );}

export default FooterLogo;