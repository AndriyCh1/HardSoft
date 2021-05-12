import React from "react";
import '../App.css';
import locationIcon from "../assets/location.png";
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";
// import ContactsItem from '../ContactsItem/ContactsItem'
const Contacts = (props) => {
  return (
    <div className="contacts">
      <div className="contacts__item">
        <div className="contacts__icon">
          <img src={locationIcon} alt="location" />
        </div>
        <div className="contacts__text">
          <span>{props.location}</span>
        </div>
      </div>

      <div className="contacts__item">
        <div className="contacts__icon">
          <img src={phoneIcon} alt="location" />
        </div>
        <div className="contacts__text">
          <a href="tel:+380">{props.phone}.</a>
        </div>
      </div>

      <div className="contacts__item">
        <div className="contacts__icon">
          <img src={emailIcon} alt="location" />
        </div>
        <div className="contacts__text">
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
