import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Container, Button, Form, InputGroup, FormControl, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaHome, FaStar, FaClipboardCheck } from 'react-icons/fa';

import vid from "./vid.mp4";
import "./Owner1.css";
import 'react-phone-input-2/lib/bootstrap.css';


export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (selectedCity === "Nashik") {
      navigate('/Search');
    } else if (selectedCity === "Mumbai") {
      navigate('/Searchm');
    }
  };
  return (
    <>


      {/* Video Background */}
      <div className="video-hero position-relative">
        <video className="w-100 h-100 object-fit-cover" autoPlay muted loop>
          <source src={vid} type="video/mp4" />
        </video>
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <Container className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          <h1 className="dd">Find Your Future Dream Home</h1>
          <div className="d-flex justify-content-center mb-3">
            <Button className="btn-danger me-2">Buy</Button>
            <Button className="btn-danger">Rent</Button>
          </div>

          <Row className="align-items-center justify-content-center mt-3">
            <Col xs="auto" className="d-flex flex-nowrap align-items-center gap-2 mt-2">
              <Form.Select
                style={{ maxWidth: 150 }}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              > 
              <option>Select City</option>
                <option value="Nashik">Nashik</option>
                <option value="Mumbai">Mumbai</option>
              </Form.Select>

              <InputGroup className="glass-search d-flex align-items-center p-1 rounded">
                <FormControl style={{ maxWidth: 150 }} placeholder="Locality" />
                <Button variant="dark" onClick={handleSearch}>🔍 Search</Button>
              </InputGroup>
            </Col>
          </Row>

          {/* ✅ Property Owner Link Below Search */}
          <div className="mt-4" >
            <Link to='/sell' className="text-white text-decoration-none fs-5" style={{ fontWeight: "lighter", fontSize: '2rem' }}>
              ------ Are you a Property Owner ? ------
            </Link>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <div className="features-container">
        {[{
          icon: <FaHome style={{ color: "#ff6b6b" }} />,
          title: "Find Your Future Dream Home",
          desc: "Browse verified listings with detailed info & flexible rent plans."
        }, {
          icon: <FaStar style={{ color: "#f1c40f" }} />,
          title: "Premium Featured Homes",
          desc: "Discover our top-rated and uniquely curated listings."
        }, {
          icon: <FaClipboardCheck style={{ color: "#2ecc71" }} />,
          title: "Verified & Approved",
          desc: "Trust your choice—each home goes through strict validation."
        }].map((f, idx) => (
          <div key={idx} className="feature-card">
            <div className="icon-wrapper">{f.icon}</div>
            <h5>{f.title}</h5>
            <p>{f.desc}</p>
            <a href="#explore" className="learn-more">Learn more →</a>
          </div>
        ))}
      </div>

      {/* Footer */}
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
    </>
  );
}
