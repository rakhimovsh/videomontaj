import React from 'react';
import './AboutUs.scss'
import AboutUsImg from '../../../Assets/Images/about-us.png'
const AboutUs = () => {
    return (
        <section className="about-us site-container">
            <div className="about-us__inner">
                <h2>
                    О нас
                </h2>

                <h3>
                    Мы постоянно нагнетаем страсти, соединяющие члены, чтобы повысить ценности для сообщества.
                </h3>
            </div>

            <img className="about-us_img" src={AboutUsImg} alt="hero-img" />
        </section>
        
    );
}

export default AboutUs;
