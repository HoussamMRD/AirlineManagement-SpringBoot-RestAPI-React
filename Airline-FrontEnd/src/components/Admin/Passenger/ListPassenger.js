import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

import '../Plane/PlaneCrudTable.css';




const PlaneCrudTablePassenger = () => {

    const { id } = useParams();
  
    const [passengers, setPassengers] = useState([
  
      // Add more initial plane data as needed
    ]);



    useEffect(() => {
        loadPassengers();
      }, []);


      const loadPassengers = async () => {
        const result = await axios.get("http://localhost:8080/airline/passenger");
        setPassengers(result.data.reverse());
      };



      // CRUD operations Passenger


  const handleViewPassenger = async () => {

  };



  const handleDeletePassenger= async (id) => {
    const result = await axios.delete(`http://localhost:8080/airline/passenger/Deletepassengers/${id}`);
    loadPassengers();
  };





  // Redirect to the AddPassenger page 
  const handleAddPassenger = () => {
    window.location.href = '/dashboard/AddPassenger';

  };


  // Redirect to the EditPlane page 
  const EditPassenger = () => {
    // window.location.href = '/dashboard/EditPassenger';


  };




   // Redirect to the Dashboard page 
   const handleBackToDash = () => {
    window.location.href = '/Dashboard-Admin';

  };




  // Search Plane
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPlanes = passengers.filter((passenger) =>
  passenger.passengerNumPassport.toLowerCase().includes(searchTerm.toLowerCase())
  );





  return (
    <div className="container">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>Manage <b>Passengers</b></h2>
            </div>



            <div className="col-sm-6">

              <button className="btn btn-success" data-toggle="modal" onClick={handleAddPassenger}>
                <i className="material-icons">&#xE147;</i> <span>Add New Passenger</span>
              </button>

              <button className="btn btn-secondary" data-toggle="modal" onClick={handleBackToDash}>
                <i className="material-icons">&#xe88a;</i> <span>Back to Dashboard</span>
              </button>


              <div className="col-sm-6">
                <div className="search-container">
                  <div className="search-wrapper">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search Plane..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="search-icon">
                      <FaSearch />
                    </span>
                  </div>
                </div>
              </div>






              </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <span className="custom-checkbox">
                </span>
              </th>
              <th> Name </th>
              <th>Nationality</th>
              <th>Gender</th>
                <th>Num-Passport</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {passengers.map((passenger) => (
              <tr key={passenger.id}>
                <td>
                  <span className="custom-checkbox">
                    <input type="checkbox" id={`checkbox${passenger.id}`} name="options[]" value={passenger.id} />
                    <label htmlFor={`checkbox${passenger.id}`}></label>
                  </span>
                </td>
                <td>{passenger.passengerName}</td>
                <td>{passenger.passengerNationality}</td>
                <td>{passenger.passengerGender}</td>
                <td>{passenger.passengerNumPassport}</td>
                <td>{passenger.passengerEmail}</td>
                <td>{passenger.passengerAdress}</td>
                <td>{passenger.passengerPhone}</td>
                <td>
                <a href='/dashboard/ViewPassenger' className="view" data-toggle="modal" >
                    <i className="material-icons" data-toggle="tooltip" title="View">&#xe8ef;</i>
                  </a>
                  
                  <Link to={`/dashboard/EditPassenger/${passenger.passengerId}`} className="edit" data-toggle="modal" >
                    <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                  </Link>

                  <a href="#deletePassengerModal" className="delete" data-toggle="modal" onClick={() => handleDeletePassenger(passenger.passengerId)}>
                    <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                  </a>
                </td>
              </tr>
            ))}

</tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">Showing <b>{passengers.length}</b> entries</div>
        </div>
      </div>
      {/* Modals for editing and deleting Passenger */}
      <div id="editPassengerModal" className="modal fade">
        {
          // Edit Passenger Modal Content

        }
      </div>
      <div id="deletePlaneModal" className="modal fade">
        {/* Delete Passenger Modal Content */}





      </div>
    </div>
  );





};

export default PlaneCrudTablePassenger;



