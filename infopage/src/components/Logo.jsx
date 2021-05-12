import React from 'react'

import logoIcon from "../assets/logo.svg";

import '../App.css';

const Logo = () => {
    return(
        <a href="/" className="header__logo">
            <img src={logoIcon} alt="logo"/>
        </a>
    )
}
export default Logo;