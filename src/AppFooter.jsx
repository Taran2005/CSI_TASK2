import React from 'react';
import './AppFooter.css';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import twitter from './assets/twitter.png';
import youtube from './assets/youtube.png';

function Footer() {
    return (
        <footer className='container'>
            <div className="footer-links">
                <div className="footer-section" id='socials'>
                    <p className="socials-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="social-icons">
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                        <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
                        <a href="#"><img src={twitter} alt="Twitter" /></a>
                        <a href="#"><img src={youtube} alt="YouTube" /></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Home</h3>
                    <a href="#">Booking</a>
                    <a href="#">Facilities</a>
                    <a href="#">Location</a>
                    <a href="#">Contact</a>
                </div>
                <div className="footer-section">
                    <h3>Help</h3>
                    <a href="#">About Us</a>
                    <a href="#">Help center</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">FAQs</a>
                </div>
                <div className="footer-section">
                    <h3>Get the app</h3>
                    <a href="#">iOS app</a>
                    <a href="#">Android app</a>
                </div>
            </div>
            <p>&copy; 2024 Lorem Ipsum. All rights reserved.</p>
        </footer>
    );
}

export default Footer;