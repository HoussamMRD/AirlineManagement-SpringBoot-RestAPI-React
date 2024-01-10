import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Import CSS file for styling
import { FaPlane, FaUsers, FaUser, FaPlaneDeparture, FaSignOutAlt, FaMoneyBill } from 'react-icons/fa'; // Import Font Awesome icons
import { BsHouse } from 'react-icons/bs'; // Bootstrap Icons
import { Nav } from 'react-bootstrap';

const AdminDashboard = () => {
  const handleLogout = () => {
    // Redirect to the login page after logout.
    window.location.href = '/Login';
  };

  // show dynamic  data for the number of planes
  
  
  const numberOfPlanes = 10;
  const numberOfPassengers = 8;
  const numberOfFlights = 8;

 

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3>
          <Nav.Link as={Link} to="/Dashboard-Admin" style={{ fontSize: '18px' }}>
            <BsHouse style={{ marginRight: '5px' }} />
            Admin Dash
          </Nav.Link>
        </h3>
        <ul className="sidebar-list">
          <li>
            <Link to="/dashboard/ListPlane">
              <FaPlane /> Planes
            </Link>
          </li>
          <li>
            <Link to="/dashboard/ListPassenger">
              <FaUsers /> Passengers
            </Link>
          </li>
          <li>
            <Link to="/dashboard/ListPilot">
              <FaUser /> Pilots
            </Link>
          </li>
          <li>
            <Link to="/dashboard/ListFlight">
              <FaPlaneDeparture /> Flights
            </Link>
          </li>
          <li>
            <Link to="/dashboard/ListPay">
              <FaMoneyBill /> Payments
            </Link>
          </li>
        </ul>
        <button onClick={handleLogout} className="logout-btn">
          <FaSignOutAlt /> Logout
        </button>
      </div>



      {/* Your main content area goes here */}
      <div className="main-content">
        <div className="dashboard-cards-container">
          <div className="dashboard-card">
            <FaPlane size={40} style={{ color: '#eb2aee' }} />
            <p style={{ fontSize: '24px', color: '#ffff' }}>{numberOfPlanes}</p>
            <span style={{ color: '#eb2aee' }}>Planes</span>
          </div>
          <div className="dashboard-card">
            <FaUsers size={40} style={{ color: '#edf312' }} />
            <p style={{ fontSize: '24px', color: '#ffff' }}>{numberOfPassengers}</p>
            <span style={{ color: '#edf312' }}>Passengers</span>
          </div>
          <div className="dashboard-card">
            <FaPlaneDeparture size={40} style={{ color: '#91f312' }} />
            <p style={{ fontSize: '24px', color: '#ffff' }}>{numberOfFlights}</p>
            <span style={{ color: '#91f312' }}>Flights</span>
          </div>
        </div>
      </div>


      {/* add a statistic graphe */}
      
      


    
    </div>
  );
};

export default AdminDashboard;
