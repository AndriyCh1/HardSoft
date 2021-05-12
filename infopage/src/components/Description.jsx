import React from 'react'
import DescriptionInfo from './DescriptionInfo'
import descriptionIcon from "../assets/description-image.jpg";
import '../App.css';

const Description = () => {
    return (
        <section className="description">
            <div className="container">
                <div className="description__inner">
                    <DescriptionInfo />
                    <img src={descriptionIcon} alt="description"/>
                </div>
            </div>
    </section>
    )
}
export default Description;