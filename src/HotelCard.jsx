import React from 'react';
import './HotelCard.css';
import hotelcard1 from './assets/hotelcard1.png';
import hotelcard2 from './assets/hotelcard2.png';
import hotelcard3 from './assets/hotelcard3.png';

const HotelCard = ({ image, location, name, price, rating }) => {
    return (
        <div className="hotel-card">
            <img src={image} alt={name} className="hotel-image" />
            <div className="hotel-content">
                <p className="hotel-location">{location}</p>
                <h3 className="hotel-name">{name}</h3>
                <div className="hotel-info">
                    <p className="hotel-price">${price} Per Night</p>
                    <div className="hotel-rating">
                        {Array(Math.floor(rating)).fill(<span className='star filled'>★</span>)}
                        {Array(Math.ceil(5 - rating)).fill(<span className='star'>★</span>)}
                        <span className="rating-value">{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HotelList = () => {
    const hotels = [
        {
            image: hotelcard1,
            location: 'London NW8 7JT England',
            name: 'Danubius Hotel Regents Park',
            price: 100,
            rating: 4.3,
        },
        {
            image: hotelcard2,
            location: 'London NW8 7JT England',
            name: 'The Resident Soho',
            price: 150,
            rating: 4.7,
        },
        {
            image: hotelcard3,
            location: 'London NW8 7JT England',
            name: 'London Bridge Hotel',
            price: 200,
            rating: 3.8,
        },
    ];

    return (
        <div className="hotel-list">
            <h2>Our most popular Hotels</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem blanditiis veniam totam.</p>
            <button className="view-all-btn">View All</button>
            <div className="hotel-cards">
                {hotels.map((hotel) => (
                    <HotelCard
                        image={hotel.image}
                        location={hotel.location}
                        name={hotel.name}
                        price={hotel.price}
                        rating={hotel.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default HotelList;
