import React from 'react'

import Logo from "./Logo"
import Navigation from "./Navigation"
import LanguageButton from "./LanguageButton"
import ContactButton from "./ContactButton"

import '../App.css';



const Header = () => {
    return (
      <header className="header">
        <Logo />
        <div className="navigation">
          <Navigation items={[
              "Як це працює?",
              "Про нас",
              "Послуги",
              "Індустріальна експертиза",
              "Портфоліо",
              "Контакти",
              "Кар’єр",
            ]}
          />

          <div className="buttons">
            <LanguageButton language="ua"/>
            <ContactButton />
          </div>
        </div>
        
        <div className="burger">
            <div className="burger__line"></div>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
          </div>

      </header>
    );
}
export default Header;