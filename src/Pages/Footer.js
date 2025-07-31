// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <Container>
        <Row className="mb-4 g-4">
          <Col sm={3}>
            <h5 className="mb-3">🏠 Owner</h5>
            <p>Your trusted house rental partner</p>
            <Form className="d-flex">
              <FormControl type="email" placeholder="Subscribe for updates" />
              <Button variant="success" className="ms-2">Go</Button>
            </Form>
          </Col>
          <Col sm={3}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/aboutus" className="text-light">About Us</NavLink></li>
              <li><NavLink to="/faq" className="text-light">FAQ</NavLink></li>
              <li><NavLink to="/privacy" className="text-light">Privacy Policy</NavLink></li>
              <li><NavLink to="/sitemap" className="text-light">Sitemap</NavLink></li>
            </ul>
          </Col>
          <Col sm={3}>
            <h5 className="mb-3">Contact</h5>
            <p>Email: <a href="mailto:support@owner.com" className="text-light">support@owner.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="text-light">+91‑12345‑67890</a></p>
            <p>Address: Nashik, Maharashtra</p>
          </Col>
          <Col sm={3} className="d-flex flex-column align-items-start">
            <h5 className="mb-3">Connect</h5>
            <div className="mb-3">
              <a href="https://wa.me/..." className="text-success me-3 hover-up"><FaWhatsapp size={28} /></a>
              <a href="https://instagram.com/..." className="text-danger hover-up"><FaInstagram size={28} /></a>
            </div>
            <Button variant="outline-light" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑ Back to top</Button>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <Row>
          <Col className="text-center">
            <small>© 2025 Online House Rental System. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
