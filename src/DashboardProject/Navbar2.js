import React from 'react';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo22 from '../Assets/Images/logo22.png'; // ✅ import your logo

function Navbar2() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>

        {/* ✅ Logo + Brand name */}
        <Navbar.Brand as={NavLink} to='../LoginPage' className="d-flex align-items-center">
          <img
            src={logo22}
            alt="Logo"
            height="40" // adjust size as needed
            className="me-2"
          />
          Online House Rental System
        </Navbar.Brand>

        <Form className="d-flex ms-auto me-3">
          <FormControl type="search" placeholder="Search" className="me-2" />
        </Form>

        <Nav>
          <Nav.Link href="#"><FaBell /></Nav.Link>
          <Nav.Link href="#"><FaUserCircle /></Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  );
}

export default Navbar2;