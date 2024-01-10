import React, { Component } from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {  BsList } from 'react-icons/bs'; // Bootstrap Icons
import {   FaPlane } from 'react-icons/fa'; // Font Awesome Icons
import { FaSignOutAlt } from 'react-icons/fa'; // Font Awesome Icons

import Home from './Home';

import Login from './Auth/Login';
import Booking from './Booking';
import AdminDashboard from './Admin/Dashboard-Admin';

import ListPlane from './Admin/Plane/ListPlane';
import AddPlane from './Admin/Plane/AddPlane';
import EditPlane from './Admin/Plane/EditPlane';

import ListPassenger from './Admin/Passenger/ListPassenger';
import AddPassenger from './Admin/Passenger/AddPassenger';
import EditPassenger from './Admin/Passenger/EditPassenger';


import ListPilot from './Admin/Pilot/ListPilot';
import AddPilot from './Admin/Pilot/AddPilot';
import EditPilot from './Admin/Pilot/EditPilot';

import ListFlight from './Admin/Flight/ListFlight';
import AddFlight from './Admin/Flight/AddFlight';
import EditFlight from './Admin/Flight/EditFlight';






export default class extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar expand="lg" variant="dark" className="navbar navbar-dark" style={{ backgroundColor: '#3a3d3f' }}>
            <Container fluid>
              <Navbar.Brand as={Link} to="/Dashboard-Admin" style={{ fontSize: '24px' }}>
                <FaPlane style={{ marginRight: '5px' }} />
                AirLine Management
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  {/* Add other navigation links here */}
                  <Nav.Link as={Link} to="/dashboard/ListPilot" style={{ fontSize: '18px' }}>
                    <BsList style={{ marginRight: '5px' }} />
                    List Pilots
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard/ListPlane" style={{ fontSize: '18px' }}>
                    <BsList style={{ marginRight: '5px' }} />
                    List Planes
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard/ListPassenger" style={{ fontSize: '18px' }}>
                    <BsList style={{ marginRight: '5px' }} />
                    List Passengers
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard/ListFlight" style={{ fontSize: '18px' }}>
                    <BsList style={{ marginRight: '5px' }} />
                    List Flights
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard/ListPay" style={{ fontSize: '18px' }}>
                    <BsList style={{ marginRight: '5px' }} />
                    List Payments
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Nav.Link as={Link} to="/Login" style={{ color: 'white', fontSize: '18px' }}>
                    <FaSignOutAlt style={{ marginRight: '5px' }} />
                    Logout
                  </Nav.Link>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/Login" component={Login} />

            <Route exact path="/Booking" component={Booking} />

            <Route exact path="/Dashboard-Admin" component={AdminDashboard} />

            <Route exact path="/dashboard/ListPlane" component={ListPlane} />
            <Route exact path="/dashboard/ListPassenger" component={ListPassenger} />
            <Route exact path="/dashboard/ListPilot" component={ListPilot} />
            <Route exact path="/dashboard/ListFlight" component={ListFlight} />


            <Route exact path="/dashboard/AddPlane" component={AddPlane} />
            <Route exact path="/dashboard/AddPassenger" component={AddPassenger} />
            <Route exact path="/dashboard/AddPilot" component={AddPilot} />
            <Route exact path="/dashboard/AddFlight" component={AddFlight} />


            <Route exact path="/dashboard/EditPlane/:id" component={EditPlane} />
            <Route exact path="/dashboard/EditPassenger/:id" component={EditPassenger} />
            <Route exact path="/dashboard/EditPilot/:id" component={EditPilot} />
            <Route exact path="/dashboard/EditFlight/:id" component={EditFlight} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}
