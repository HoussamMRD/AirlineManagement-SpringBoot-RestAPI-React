import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

import '../Plane/PlaneCrudTable.css';



const PlaneCrudTablePilot = () => {


    const { id } = useParams();
  
    const [pilots, setPilots] = useState([
  
      // Add more initial plane data as needed
    ]);

    useEffect(() => {
        loadPilots();
      }, []);

      const loadPilots = async () => {
        const result = await axios.get("http://localhost:8080/airline/pilots");
        setPilots(result.data.reverse());
      };

        // CRUD operations Pilot


    const handleViewPilot = async () => {
            
        };


    const handleDeletePilot= async (id) => {
        const result = await axios.delete(`http://localhost:8080/airline/pilots/Deletepilots/${id}`);
        loadPilots();
      };


    // Redirect to the AddPilot page

    const handleAddPilot = () => {
        window.location.href = '/dashboard/AddPilot';

      };


      // Redirect to the EditPilot page 
  const EditPilot = () => {
    // window.location.href = '/dashboard/EditPassenger';


  };




  // Redirect to the Dashboard page 
  const handleBackToDash = () => {
    window.location.href = '/Dashboard-Admin';

  };


  // Search Pilot
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPilots = pilots.filter((pilot) =>
    pilot.pilotName.toLowerCase().includes(searchTerm.toLowerCase())
  );


    return (    

        <div className="container">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>Manage <b>Pilots</b></h2>
            </div>



            <div className="col-sm-6">

              <button className="btn btn-success" data-toggle="modal" onClick={handleAddPilot}>
                <i className="material-icons">&#xE147;</i> <span>Add New Pilot</span>
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
              <th>Rank</th>
              <th>License</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {pilots.map((pilot) => (
              <tr key={pilot.id}>
                <td>
                  <span className="custom-checkbox">
                    <input type="checkbox" id={`checkbox${pilot.id}`} name="options[]" value={pilot.id} />
                    <label htmlFor={`checkbox${pilot.id}`}></label>
                  </span>
                </td>
                <td>{pilot.pilotName}</td>
                <td>{pilot.pilotRank}</td>
                <td>{pilot.pilotLicense}</td>
                <td>
                <a href='/dashboard/ViewPilot' className="view" data-toggle="modal" >
                    <i className="material-icons" data-toggle="tooltip" title="View">&#xe8ef;</i>
                  </a>
                  
                  <Link to={`/dashboard/EditPilot/${pilot.pilotId}`} className="edit" data-toggle="modal" >
                    <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                  </Link>

                  <a href="#deletePilotModal" className="delete" data-toggle="modal" onClick={() => handleDeletePilot(pilot.pilotId)}>
                    <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                  </a>
                </td>
              </tr>
            ))}

</tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">Showing <b>{pilots.length}</b> entries</div>
        </div>
      </div>
      {/* Modals for editing and deleting pilot */}
      <div id="editPilotModal" className="modal fade">
        {
          // Edit Pilot Modal Content

        }
      </div>
      <div id="deletePilotModal" className="modal fade">
        {/* Delete Pilot Modal Content */}





      </div>
    </div>
  );





};

export default PlaneCrudTablePilot;












