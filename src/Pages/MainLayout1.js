import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import logo22 from '../Assets/Images/logo22.png'; // adjust as needed
import logo from './nb_logo_trans-min.png';

export default function MainLayout() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {/* First Navbar */}
      <Navbar expand="lg" bg="light" variant="light" sticky="top" style={{padding:0,boxShadow:''}}>
        <Container style={{paddingTop:0,paddingBottom:0}}>
          <Navbar.Brand as={NavLink} to="/" className="fw-bold d-flex align-items-center">
            <img src={logo} alt="logo" height="50" width={250} className="me-2" />
            <span className="fs-5 text-dark"></span>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="align-items-center gap-3">
              <Button size="sm" as={NavLink} to="/Owner1" style={{boxShadow:'none'}}>Home</Button>
              <Button size="sm" as={NavLink} to="/Owner1" style={{boxShadow:'nnone'}}>Owner</Button>
              <Button size="sm" onClick={() => setShowLogin(true)} style={{boxShadow:'none'}}>Login</Button>
              <Button size="sm" onClick={() => setShowSignup(true)} style={{boxShadow:'none'}}>Sign Up</Button>
              <NavDropdown title="Menu">
                <NavDropdown.Item as={NavLink} to="/sell">Post Property</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/gallery">Gallery</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/feedback">Feedback</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/aboutus">About Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Second Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Nav className="mx-auto gap-3">
           
           
            <Nav.Link as={NavLink} to="/gallery">Property Details</Nav.Link>
            <Nav.Link as={NavLink} to="/payments">Booking System</Nav.Link>
            <Nav.Link as={NavLink} to="/messages">Maintance</Nav.Link>
            <Nav.Link as={NavLink} to="/Welcome">Dashboard</Nav.Link>
            <Nav.Link as={NavLink} to="/AdminPanel">Admin Panel</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Modals */}
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
      <SignupModal show={showSignup} handleClose={() => setShowSignup(false)} />

      {/* Nested routes */}
      <Outlet />
    </>
  );
}

