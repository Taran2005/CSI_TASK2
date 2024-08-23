import React from 'react';
import './HeroSection.css';
import hero from './assets/hero.png';
import playbutton from './assets/playbutton.png';


const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Find your perfect place to stay</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <button className="video-container">
                    <img src={playbutton} alt="Play Button" style={{width : '30px'}} />
                Watch Video
                </button>
            </div>
            <div className="hero-image">
                <img src={hero} alt="Hotel" />
            </div>
        </div>
    );
};

export default HeroSection;
