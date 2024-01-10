// Home.js
import React from 'react';
import { FaPlane, FaInfoCircle, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="header">
        <FaPlane className="icon" />
        <h1>Airline Management </h1>
        <FaPlane className="icon" />
      </div>
      <div className="content">
        <p> The world is a book, and those who do not travel read only a page.<b> Welcome to our Airline Management</b>
         </p>
        <Link to="/login">
          <button className="button login-button">Login</button>
        </Link>
        <Link to="/Booking">
          <button className="button booking-button">Book Now</button>
        </Link>
      </div>
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel turpis et libero
          malesuada dictum. Quisque id sapien vel arcu accumsan interdum. Sed malesuada
          condimentum ligula, vel eleifend odio rhoncus sit amet. Proin eu nunc eget odio
          bibendum imperdiet. In hac habitasse platea dictumst. Nulla facilisi. Sed nec sapien
          eu libero sagittis mattis vel ut ligula. In aliquam augue ut est auctor, non
          ullamcorper justo hendrerit. Nullam auctor tellus nec metus convallis,
          a interdum turpis consectetur.
        </p>
        <FaInfoCircle className="icon icon-about" />
      </div>
      <div className="about-us">
        <h2>News</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel turpis et libero
          malesuada dictum. Quisque id sapien vel arcu accumsan interdum. Sed malesuada
          condimentum ligula, vel eleifend odio rhoncus sit amet. Proin eu nunc eget odio
          bibendum imperdiet. In hac habitasse platea dictumst. Nulla facilisi. Sed nec sapien
          eu libero sagittis mattis vel ut ligula. In aliquam augue ut est auctor, non
          ullamcorper justo hendrerit. Nullam auctor tellus nec metus convallis,
          a interdum turpis consectetur.
        </p>
        {/* Add your news content here */}
        <FaInfoCircle className="icon icon-about" />
      </div>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div>
            <p>
              <FaPhone className="icon" />
              +1 (234) 567-89
            </p>
            <p>
              <FaEnvelope className="icon" />
              info@example.com
            </p>
          </div>
          <div>


          <p> </p>
            <div className="social-icons">
            
           
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
             
            </div>
          </div>
        </div>
        <div className="comment-form">
          <p>Have a question or comment? Leave us a message:</p>
          <textarea rows="4" placeholder="Type your message here"></textarea>
          <button className="button">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
