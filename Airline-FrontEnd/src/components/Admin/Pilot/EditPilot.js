import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory , useParams } from 'react-router-dom';

// Importing Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Plane/AddPlane.css'; // Create a CSS file for custom styles



export default function EditPilot() {


    let history = useHistory();

  const { id } = useParams();


    const [pilot, setPilot] = useState({
        pilotName: '',
        pilotRank: '',
        pilotLicense: '',
       
     
    });


    const { pilotName, pilotRank, pilotLicense } = pilot;

    const onInputChange = (e) => {
        setPilot({ ...pilot, [e.target.name]: e.target.value });

    };


    useEffect(() => {
        loadPilot();
      }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/airline/pilots/Updatepilots/${id}`, pilot);
        history.push('/dashboard/ListPilot');
    }

    const loadPilot = async () => {
        const result = await axios.get(`http://localhost:8080/airline/pilots/GetIdpilots/${id}`);
        setPilot(result.data);
      }


    const handleBackToDash = () => {
            
        // Redirect to the Dashboard page 
        window.location.href = '/dashboard/ListPilot';

    };


    return (

        <div className="add-plane-container">
      <h1>
        <FontAwesomeIcon icon={faUser} /> Edit Pilot
      </h1>

      <form onSubmit={(e) => onSubmit(e)}>

        <div className="form-group">
          <label htmlFor="pilotName"></label>
          <input
            type="text"
            className="form-control"
            id="pilotName"
            placeholder="Enter pilot Name"
            value={pilotName}
            onChange={(e) => onInputChange(e)}
            name="pilotName" // Fix the name attribute
          />
        </div>


        <div className="form-group">
          <label htmlFor="pilotRank"></label>
          <input
            type="text"
            className="form-control"
            id="pilotRank"
            placeholder="Enter pilot Rank"
            value={pilotRank}
            onChange={(e) => onInputChange(e)}
            name="pilotRank" // Fix the name attribute
          />
        </div>


        <div className="form-group">
          <label htmlFor="pilotLicense"></label>
          <input
            type="text"
            className="form-control"
            id="pilotLicense"
            placeholder="Enter pilot License"
            value={pilotLicense}
            onChange={(e) => onInputChange(e)}
            name="pilotLicense" // Fix the name attribute
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

















