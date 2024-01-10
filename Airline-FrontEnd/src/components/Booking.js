// Import necessary React and 'react-icons' components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiPlane, TiLocationArrow, TiCalendar, TiUser } from 'react-icons/ti';
import './Booking.css';

const Booking = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    date: '',
    passengers: 1,
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="booking-page">
      <header>
        <h1>Flight Booking</h1>
      </header>

      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="departure">
            <TiLocationArrow className="icon" />
            Departure City
          </label>
          <input
            type="text"
            id="departure"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            required
          />

          <label htmlFor="destination">
            <TiPlane className="icon" />
            Destination City
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">
            <TiCalendar className="icon" />
            Departure Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="passengers">
            <TiUser className="icon" />
            Number of Passengers
          </label>
          <select
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

<Link to="/login">

          <button type="submit">Book Now</button>

</Link>
        </form>
      </section>
    </div>
  );
};

export default Booking;
