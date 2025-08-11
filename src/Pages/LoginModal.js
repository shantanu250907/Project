import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginModal({ show, handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // <-- this is needed for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register12', {
        email,
        password,
      });
      console.log('Response:', response.data);
      alert('Login Successful');
      handleClose(); // Close modal
      navigate('/dashboard'); // <-- navigate after login
    } catch (error) {
      console.error('Error:', error);
      alert('error'+error.message);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleLogin}>
        <Modal.Body>
          <Form.Group controlId="loginEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            id='email'
            name='email'
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="loginPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id='password'
              name='password'
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}


