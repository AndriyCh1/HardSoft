
import React from 'react'

import Contacts from "./Contacts"
import Links from "./Links"
import Social from "./Social"
import FooterLogo from "./FooterLogo"

import '../App.css';


const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer-left">
              <FooterLogo />
              <Contacts 
                location="с. Великі Гаї, вул. Об‘їзна 3а"
                phone="+380 ... ... ..."
                email="contact@youritsoft.com"
              />
            </div>
            <div className="footer-right">
              <Links
                items={[
                  "Як це працює?",
                  "Про нас",
                  "Послуги",
                  "Індустріальна експертиза",
                  "Портфоліо",
                  "Контакти",
                  "Кар’єра",
                ]}
              />
              <Social />
            </div>
          </div>
        </div>
      </footer>
    );
}
export default Footer;
