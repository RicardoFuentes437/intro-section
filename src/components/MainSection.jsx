import React from 'react';
import '../styles/mainSection/mainSectionStyles.css';

const MainSection = () => {
    return (
        <div id="main-section">
            <div id="main-left-section">
                <p id="header">Make remote work</p>
                <p id="description">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button id="learn-more">Learn more</button>
                <div id="clients">
                    <img src="images/client-databiz.svg" alt="client-icon" className='client-icon'></img>
                    <img src="images/client-audiophile.svg" alt="client-icon" className='client-icon'></img>
                    <img src="images/client-meet.svg" alt="client-icon" className='client-icon'></img>
                    <img src="images/client-maker.svg" alt="client-icon" className='client-icon'></img>
                </div>
            </div>
            <div id="main-right-section">
                <img src="images/image-hero-desktop.png" alt="hero-desktop" id="image-hero-desktop"></img>
                <img src="images/image-hero-mobile.png" alt="hero-mobile" id="image-hero-mobile"></img>
            </div>
        </div>
    );
}

export default MainSection;
