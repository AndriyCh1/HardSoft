import React from "react";

import "../App.css";
// import SocialItem from "../SocialItem/SocialItem";

import instagramIcon from '../assets/instagram.svg';
import facebookIcon from '../assets/facebook.svg';
import linkedinIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/twitter.svg';

const Social = () => {
  return (
    <div className="social">
      <ul className="social-items">
        <li className="social__item">
          <a href="/"><img src={instagramIcon} alt="" /></a>
        </li>
        <li className="social__item">
          <a href="/"><img src={facebookIcon} alt="" /></a>
        </li>
        <li className="social__item">
          <a href="/"><img src={linkedinIcon} alt="" /></a>
        </li>
        <li className="social__item">
          <a href="/"><img src={twitterIcon} alt="" /></a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
