// HomePage.jsx

import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import {
  Container,
  Button,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import {
  FaWhatsapp,
  FaInstagram,
  FaHome,
  FaStar,
  FaClipboardCheck
} from 'react-icons/fa';

import vid from "./vid.mp4";
import "./Owner1.css";
import 'react-phone-input-2/lib/bootstrap.css';

export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState("Nashik");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (selectedCity === "Nashik") {
      navigate('/Search');
    } else if (selectedCity === "Dhule") {
      navigate('/Searchh');
    } else if (selectedCity === "Mumbai") {
      navigate('/Searchm');
    }
  };

  return (
    <>
      {/* Video Background */}
      <div className="video-hero position-relative " >
        <video className="w-100 h-100 object-fit-cover" autoPlay muted loop>
          <source src={vid} type="video/mp4" />
        </video>
        <div className="hero-overlay position-absolute top-10 start-0 w-100 h-100" style={{}}></div>
        <Container className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          <h1 className="ss" style={{fontSize:45}}>Find Your Future Dream Home</h1>
          <div className="d-flex justify-content-center mb-3">
            <Button className="btn-hero me-2">Buy</Button>
            <Button className="btn-outline-hero">Rent</Button>
          </div>

          <Row className="align-items-center justify-content-center mt-3">
            <Col xs="auto" className="d-flex flex-nowrap align-items-center gap-2 mt-2">
              <Form.Select
                style={{ maxWidth: 150 }}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="Nashik">Nashik</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Dhule">Dhule</option>
              </Form.Select>

              <InputGroup className="glass-search d-flex align-items-center p-1 rounded">
                <FormControl style={{ maxWidth: 150 }} placeholder="Locality" />
                <Button variant="dark" onClick={handleSearch}>
                  🔍 Search
                </Button>
              </InputGroup>
            </Col>
          </Row>

          {/* ✅ Property Owner Link Below Search */}
          <div className="mt-7">
            <Link to='/sell' className="text-white text-decoration-underline fs-5">
              ------ Are you a Property Owner? ------
            </Link>
          </div>
        </Container>
      </div>

      {/* You can keep the rest of your Features and Footer section as-is */}
    </>
  );
}
