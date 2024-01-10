import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Importing Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../Plane/AddPlane.css'; // Create a CSS file for custom styles

export default function AddFlight() {
    let history = useHistory();

    const [passenger, setPassenger] = useState({
        passengerName: '',
        passengerNationality: '',
        passengerGender: '',
        passengerNumPassport: '',
        passengerEmail: '',
        passengerAddress: '',
        passengerPhone: '',
    });

    const { passengerName, passengerNationality, passengerGender, passengerNumPassport, passengerEmail, passengerAddress, passengerPhone } = passenger;

    const onInputChange = (e) => {
        setPassenger({ ...passenger, [e.target.name]: e.target.value });

    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/airline/passenger/ADDpassengers', passenger);
        history.push('/dashboard/ListPassenger');
    };


    const handleBackToDash = () => {
            
            // Redirect to the Dashboard page 
            window.location.href = '/dashboard/ListFlight';
    
        };

    return (

        <div className="add-plane-container">
      <h1>
        <FontAwesomeIcon icon={faUsers} /> Add Flight
      </h1>


      <form onSubmit={(e) => onSubmit(e)}>

        <div className="form-group">
          <label htmlFor="Num-Flight"></label>
          <input
            type="text"
            className="form-control"
            id="Num-Flight"
            placeholder="Enter Num-Flight"
            value={passengerName}
            onChange={(e) => onInputChange(e)}
            name="Num-Flight" // Fix the name attribute
          />
        </div>
        <div className="form-group">
          <label htmlFor="passenger Name"></label>
          <input
            type="text"
            className="form-control"
            id="passenger Name"
            placeholder="Enter  passenger Name"
            value={passengerNationality}
            onChange={(e) => onInputChange(e)}
            name="passenger Name" // Fix the name attribute
          />
        </div>

        <div className="form-group">
          <label htmlFor="Plane"></label>
          <input
            type="text"
            className="form-control"
            id="Plane"
            placeholder="Enter Plane"
            value={passengerGender}
            onChange={(e) => onInputChange(e)}
            name="Plane" // Fix the name attribute
          />
        </div>


        <div className="form-group">
          <label htmlFor="Price"></label>
          <input
            type="text"
            className="form-control"
            id="Price"
            placeholder="Enter Price"
            value={passengerNumPassport}
            onChange={(e) => onInputChange(e)}
            name="Price" // Fix the name attribute
          />
        </div>


        <div className="form-group">
          <label htmlFor="Origin-Flight"></label>
          <input
            type="text"
            className="form-control"
            id="Origin-Flight"
            placeholder="Enter Origin-Flight"
            value={passengerEmail}
            onChange={(e) => onInputChange(e)}
            name="Origin-Flight" // Fix the name attribute
          />
        </div>


        <div className="form-group">
          <label htmlFor="Dest-Flight"></label>
          <input
            type="text"
            className="form-control"
            id="Dest-Flight"
            placeholder="Enter Dest-Flight"
            value={passengerAddress}
            onChange={(e) => onInputChange(e)}
            name="Dest-Flight" // Fix the name attribute
          />
        </div>



        <div className="form-group">
          <label htmlFor="Seat-Class"></label>
          <input
            type="text"
            className="form-control"
            id="Seat-Class"
            placeholder="Enter Seat-Class"
            value={passengerPhone}
            onChange={(e) => onInputChange(e)}
            name="Seat-Class" // Fix the name attribute
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
















































