import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory , useParams } from 'react-router-dom';

// Importing Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Plane/AddPlane.css'; // Create a CSS file for custom styles



export default function EditPassenger() {

  let history = useHistory();

  const { id } = useParams();

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

  useEffect(() => {
    loadPassenger();
  }, []);


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/airline/passenger/Updatepassengers/${id}`, passenger);
    history.push('/dashboard/ListPassenger');
};

  const loadPassenger = async () => {
    const result = await axios.get(`http://localhost:8080/airline/passenger/GetIdpassengers/${id}`);
    setPassenger(result.data);
  }


  const handleBackToDash = () => {
    
    // Redirect to the Dashboard page 
    window.location.href = '/dashboard/ListPassenger';
   
  };
 

  return (

    <div className="add-plane-container">
  <h1>
    <FontAwesomeIcon icon={faUsers} /> Edit Passenger
  </h1>


  <form onSubmit={(e) => onSubmit(e)}>

    <div className="form-group">
      <label htmlFor="PassengerName"></label>
      <input
        type="text"
        className="form-control"
        id="PassengerName"
        placeholder="Enter Passenger Name"
        value={passengerName}
        onChange={(e) => onInputChange(e)}
        name="PassengerName" // Fix the name attribute
      />
    </div>
    <div className="form-group">
      <label htmlFor="passengerNationality"></label>
      <input
        type="text"
        className="form-control"
        id="passengerNationality"
        placeholder="Enter passenger Nationality"
        value={passengerNationality}
        onChange={(e) => onInputChange(e)}
        name="passengerNationality" // Fix the name attribute
      />
    </div>

    <div className="form-group">
      <label htmlFor="passengerGender"></label>
      <input
        type="text"
        className="form-control"
        id="passengerGender"
        placeholder="Enter passenger Gender"
        value={passengerGender}
        onChange={(e) => onInputChange(e)}
        name="passengerGender" // Fix the name attribute
      />
    </div>


    <div className="form-group">
      <label htmlFor="passengerNumPassport"></label>
      <input
        type="text"
        className="form-control"
        id="passengerNumPassport"
        placeholder="Enter passenger NumPassport"
        value={passengerNumPassport}
        onChange={(e) => onInputChange(e)}
        name="passengerNumPassport" // Fix the name attribute
      />
    </div>


    <div className="form-group">
      <label htmlFor="passengerEmail"></label>
      <input
        type="text"
        className="form-control"
        id="passengerEmail"
        placeholder="Enter passenger Email"
        value={passengerEmail}
        onChange={(e) => onInputChange(e)}
        name="passengerEmail" // Fix the name attribute
      />
    </div>


    <div className="form-group">
      <label htmlFor="passengerAddress"></label>
      <input
        type="text"
        className="form-control"
        id="passengerAddress"
        placeholder="Enter passenger Address"
        value={passengerAddress}
        onChange={(e) => onInputChange(e)}
        name="passengerAddress" // Fix the name attribute
      />
    </div>



    <div className="form-group">
      <label htmlFor="passengerPhone"></label>
      <input
        type="text"
        className="form-control"
        id="passengerPhone"
        placeholder="Enter passengerPhone"
        value={passengerPhone}
        onChange={(e) => onInputChange(e)}
        name="passengerPhone" // Fix the name attribute
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
















































