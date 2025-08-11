
// import React, { useState } from 'react';
// import { Outlet, NavLink } from 'react-router-dom';
// import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
// import LoginModal from './LoginModal';
// import SignupModal from './SignupModal';
// import logo22 from '../Assets/Images/logo22.png'; // adjust as needed
// import logo from './nb_logo_trans-min.png';

// export default function MainLayout() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);

//   return (
//     <>
//       {/* First Navbar */}
//       <Navbar expand="lg" bg="light" variant="light" sticky="top" style={{padding:0,boxShadow:''}}>
//         <Container style={{paddingTop:0,paddingBottom:0}}>
//           <Navbar.Brand as={NavLink} to="/" className="fw-bold d-flex align-items-center">
//             <img src={logo} alt="logo" height="50" width={250} className="me-2" />
//             <span className="fs-5 text-dark"></span>
//           </Navbar.Brand>
//           <Navbar.Collapse className="justify-content-end">
//             <Nav className="align-items-center gap-3">
//               <Button   size="sm" as={NavLink} to="/Owner1" variant="secondary"  style={{boxShadow:'none'}}>Home</Button>
//               <Button size="sm" as={NavLink} to="/Owner1" variant='danger' style={{boxShadow:'nnone'}}>Tenant</Button>
//               <Button size="sm" onClick={() => setShowLogin(true)} style={{boxShadow:'none'}}>Login</Button>
//               <Button size="sm" onClick={() => setShowSignup(true)} style={{boxShadow:'none'}}>Sign Up</Button>
//               <NavDropdown title="Menu">
//                 <NavDropdown.Item as={NavLink} to="/sell">Post Property</NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/gallery">Gallery</NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/feedback">Feedback</NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/aboutus">About Us</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Second Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Nav className="mx-auto gap-3">
           
           
//             <Nav.Link as={NavLink} to="/gallery">Property Details</Nav.Link>
//             <Nav.Link as={NavLink} to="/gallery">Maintenance</Nav.Link>
//             <Nav.Link as={NavLink} to="/payments">Booking System</Nav.Link>
//             <Nav.Link as={NavLink} to="/messages">Contact us</Nav.Link>
            
//           </Nav>
//         </Container>
//       </Navbar>

//       {/* Modals */}
//       <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
//       <SignupModal show={showSignup} handleClose={() => setShowSignup(false)} />

//       {/* Nested routes */}
//       <Outlet />
//     </>
//   );
// }
import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Button, NavDropdown, Modal, Form } from 'react-bootstrap';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import logo from './nb_logo_trans-min.png';

export default function MainLayout() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleTenantClick = () => {
    setShowPasswordModal(true);
    setPassword('');
    setError('');
  };

  const handleConfirm = () => {
    if (password === '7781') {
      setShowPasswordModal(false);
      navigate('/Owner1');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <>
      {/* First Navbar */}
      <Navbar expand="lg" bg="light" variant="light" sticky="top" style={{ padding: 0 }}>
        <Container style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Navbar.Brand as={NavLink} to="/" className="fw-bold d-flex align-items-center">
            <img src={logo} alt="logo" height="50" width={250} className="me-2" />
            <span className="fs-5 text-dark"></span>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="align-items-center gap-3">
              <Button size="sm" as={NavLink} to="/Owner1" variant="secondary" style={{ boxShadow: 'none' }}>
                Home
              </Button>

              {/* Tenant Button with Password Prompt */}
              <Button size="sm" variant="danger" style={{ boxShadow: 'none' }} onClick={handleTenantClick}>
                Tenant
              </Button>

              <Button size="sm" onClick={() => setShowLogin(true)} variant="danger" style={{ boxShadow: 'none' }}>
                Login
              </Button>
              <Button size="sm" onClick={() => setShowSignup(true)} variant="danger" style={{ boxShadow: 'none' }}>
                Sign Up
              </Button>
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
            <Nav.Link as={NavLink} to="/Booknow">Booking System</Nav.Link>
            <Nav.Link as={NavLink} to="/messages">Maintance</Nav.Link>
            <Nav.Link as={NavLink} to="/ContactUs">Contact Us</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      {/* Modals */}
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
      <SignupModal show={showSignup} handleClose={() => setShowSignup(false)} />

      {/* Password Modal for Tenant Access */}
     <Modal
  show={showPasswordModal}
  onHide={() => setShowPasswordModal(false)}
  centered
  contentClassName=""
>
  <div
    style={{
      background: 'linear-gradient(135deg, #f8f9fa, #e0e0e0)',
      borderRadius: '8px',
      padding: '10px'
    }}
  >
    <Modal.Header closeButton style={{ borderBottom: 'none' }}>
      <Modal.Title>🔐 Enter Password</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Form.Group>
        <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          isInvalid={!!error}
          style={{ backgroundColor: '#ffffffcc' }}
        />
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      </Form.Group>
    </Modal.Body>

    <Modal.Footer style={{ borderTop: 'none' }}>
      <Button variant="secondary" onClick={() => setShowPasswordModal(false)}>Cancel</Button>
      <Button variant="success" onClick={handleConfirm}>OK</Button>
    </Modal.Footer>
  </div>
</Modal>


      {/* Nested routes */}
      <Outlet />
    </>
  );
}

