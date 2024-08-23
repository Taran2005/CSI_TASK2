import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">LOREM IPSUM</div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li>Booking</li>
                <li>Facilities</li>
                <li>About Us</li>
                <li>Location</li>
                <li>Contact</li>
            </div>
            <button className="login-button">Login</button>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default Navbar;
