import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Container, Button, Form, InputGroup, FormControl, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaHome, FaStar, FaClipboardCheck } from 'react-icons/fa';
import vid from "./vid.mp4";
import "./Owner1.css";
import 'react-phone-input-2/lib/bootstrap.css';
// import MainLayout1 from "./MainLayout1";
import Footer from "./Footer";


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
        {/* <MainLayout1/> */}
      {/* Video Background */}
      <div className="video-hero position-relative fade-slide">
        <video className="w-100 h-100 object-fit-cover" autoPlay muted loop>
          <source src={vid} type="video/mp4" />
        </video>
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <Container className="hero-content position-absolute top-50 bottom-0 start-50 translate-middle text-center text-white px-3">
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
            <Link to='/Sellingt' className="text-white text-decoration-none fs-5" style={{ fontWeight: "lighter", fontSize: '2rem' }}>
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
        <Footer/>
      
    </>
  );
}
