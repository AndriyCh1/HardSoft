import React from 'react'
// import IntroInfo from '../IntroInfo/IntroInfo'

import rectangleIcon from "../assets/rectangle.svg";
import arrowIcon from "../assets/arrow.svg";

import '../App.css';


const Intro = () => {
    return (
      <section className="intro">
        <div className="container">
          <div className="intro__inner">
            <div className="intro__rectangle">
              <img src={rectangleIcon} alt="rectangle" />
            </div>
            <div className="intro__info">
              <h1 className="intro__title">Інтеграція платіжних систем</h1>
              <h2 className="intro__additional">
                Надаємо послуги з інтеграції та підключення найвигідніших платіжних систем до веб-сайту 
              </h2>
            </div>
            <div className="intro__arrow">
              <img src={arrowIcon} alt="arrow" />
            </div>
          </div>
        </div>
      </section>
    );}

export default Intro;