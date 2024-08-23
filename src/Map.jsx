import React from 'react';
import './Map.css';

const MapEmbed = () => {
    return (
        <>
            <div style={{ borderRadius: '12px', overflow: 'hidden', maxWidth: '100%', height: 'auto' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.006039035134!2d72.8371889!3d19.107391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1724341065444!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Location"
                ></iframe>
            </div>
            <div className="map-container">
                <div className="map-content">
                    <h1>Location of our Hotels</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                <div className="map-content">
                    <form className="input-div">
                        <input type="email" placeholder="your_email@gmail.com" />
                        <button type="submit">Contact</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MapEmbed;