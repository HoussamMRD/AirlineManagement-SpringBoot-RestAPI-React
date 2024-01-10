import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EditPlane from './EditPlane';
import { FaSearch } from 'react-icons/fa';


import './PlaneCrudTable.css';





const PlaneCrudTable = () => {

  const { id } = useParams();

  const [planes, setPlanes] = useState([

    // Add more initial plane data as needed
  ]);






  useEffect(() => {
    loadPlanes();
  }, []);

  const loadPlanes = async () => {
    const result = await axios.get("http://localhost:8080/airline");
    setPlanes(result.data.reverse());
  };









  // CRUD operations Plane


  const handleViewPlane = async () => {

  };




  const handleDeletePlane = async (id) => {
    const result = await axios.delete(`http://localhost:8080/airline/Deleteplanes/${id}`);
    loadPlanes();
  };





  // Redirect to the AddPlane page 
  const handleAddPlane = () => {
    window.location.href = '/dashboard/AddPlane';

  };




  // Redirect to the EditPlane page 
  const EditPlane = () => {
    // window.location.href = '/dashboard/EditPlane';


  };






  // Redirect to the Dashboard page 
  const handleBackToDash = () => {
    window.location.href = '/Dashboard-Admin';

  };


  // Search Plane
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPlanes = planes.filter((plane) =>
  plane.planeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  




  return (
    <div className="container">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>Manage <b>Planes</b></h2>
            </div>

            <div className="col-sm-6">

              <button className="btn btn-success" data-toggle="modal" onClick={handleAddPlane}>
                <i className="material-icons">&#xE147;</i> <span>Add New Plane</span>
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
              <th>Name Plane</th>
              <th>Series Plane</th>
              <th>Capacity Plane</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {planes.map((plane) => (
              <tr key={plane.id}>
                <td>
                  <span className="custom-checkbox">
                    <input type="checkbox" id={`checkbox${plane.id}`} name="options[]" value={plane.id} />
                    <label htmlFor={`checkbox${plane.id}`}></label>
                  </span>
                </td>
                <td>{plane.planeName}</td>
                <td>{plane.planeSeries}</td>
                <td>{plane.planeCapacity}</td>
                <td>
                  <a href='/dashboard/ViewPlane' className="view" data-toggle="modal" >
                    <i className="material-icons" data-toggle="tooltip" title="View">&#xe8ef;</i>
                  </a>
                  <Link to={`/dashboard/EditPlane/${plane.planeId}`} className="edit" data-toggle="modal" >
                    <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                  </Link>

                  <a href="#deletePlaneModal" className="delete" data-toggle="modal" onClick={() => handleDeletePlane(plane.planeId)}>
                    <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">Showing <b>{planes.length}</b> entries</div>
        </div>
      </div>
      {/* Modals for editing and deleting planes */}
      <div id="editPlaneModal" className="modal fade">
        {
          // Edit Plane Modal Content

        }
      </div>
      <div id="deletePlaneModal" className="modal fade">
        {/* Delete Plane Modal Content */}





      </div>
    </div>
  );





};

export default PlaneCrudTable;

