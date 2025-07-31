import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function SignupModal({ show, handleClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Sign up with", name, email, password);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered className='fade-slide'>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSignup}>
        <Modal.Body>
          <Form.Group controlId="signupName" className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" required value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="signupEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="signupPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="success" type="submit">Sign Up</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
