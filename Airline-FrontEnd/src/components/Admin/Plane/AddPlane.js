import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Importing Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './AddPlane.css'; // Create a CSS file for custom styles

export default function AddPlane() {
  let history = useHistory();

  const [plane, setPlane] = useState({
    planeName: '',
    planeSeries: '',
    planeCapacity: '',
  });

  const { planeName, planeSerie, planeCapacity } = plane;

  const onInputChange = (e) => {
    setPlane({ ...plane, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/airline/ADDplanes', plane);
    history.push('/dashboard/ListPlane');
  };


  const handleBackToDash = () => {
    
    // Redirect to the Dashboard page 
    window.location.href = '/dashboard/ListPlane';
   
  };
 

  return (
    <div className="add-plane-container">
      <h1>
        <FontAwesomeIcon icon={faPlane} /> Add Plane
      </h1>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="planeName"></label>
          <input
            type="text"
            className="form-control"
            id="planeName"
            placeholder="Enter Plane Name"
            value={planeName}
            onChange={(e) => onInputChange(e)}
            name="planeName" // Fix the name attribute
          />
        </div>
        <div className="form-group">
          <label htmlFor="planeSeries"></label>
          <input
            type="text"
            className="form-control"
            id="planeSeries"
            placeholder="Enter Plane Serie"
            value={planeSerie}
            onChange={(e) => onInputChange(e)}
            name="planeSerie" // Fix the name attribute
          />
        </div>
        <div className="form-group">
          <label htmlFor="planeCapacity"></label>
          <input
            type="text"
            className="form-control"
            id="planeCapacity"
            placeholder="Enter Plane Capacity"
            value={planeCapacity}
            onChange={(e) => onInputChange(e)}
            name="planeCapacity" // Fix the name attribute
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="reset" className="btn btn-secondary"  onClick={handleBackToDash}                   >
          Cancel
        </button>
      </form>
    </div>
  );
}
