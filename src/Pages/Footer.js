// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

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
              <li><NavLink to="/sitemap" className="text-light">Terms & Conditions</NavLink></li>
            </ul>
          </Col>
          <Col sm={3}>
            <h5 className="mb-3">Contact</h5>
            <p>Email: <a href="mailto:support@owner.com" className="text-light">support@nobroker.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="text-light">+91 97634-84443</a></p>
            <p>Address: Nashik, Maharashtra</p>
          </Col>
          <Col sm={3} className="d-flex flex-column align-items-start">
             <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151851.448078434!2d73.7210800778395!3d19.99094401363193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1754672552119!5m2!1sen!2sin"
      width="200"
      height="150"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Nashik Map"
    ></iframe>
            <h5 className="mb-3"></h5>
            <div className="mb-3">
              <a href="https://wa.me/..." className="text-success me-3 hover-up"><FaWhatsapp size={28} /></a>
              <a href="https://instagram.com/..." className="text-danger hover-up" ><FaInstagram size={28} /></a>
              <a href="https://facebook.com/..." className="text-primary hover-up" style={{marginLeft:'15px'}}><FaFacebook size={28} /></a>
            </div>
            <Button variant="outline-light" size="md" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>⬆ Back to top</Button>
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
