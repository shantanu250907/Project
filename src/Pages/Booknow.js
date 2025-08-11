import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import './Booknow.css';
import { FaUser, FaPhone, FaEnvelope, FaHome, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const BookNowForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyType: '',
    location: '',
    date: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Info:", formData);
    setSubmitted(true);
  };

  return (
    <>
      <style>
        {`
          body {
            background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: relative;
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <Container 
        className="mt-5 mb-5 p-4 rounded shadow-lg fade-slide" 
        style={{ 
          maxWidth: '650px', 
          background: 'linear-gradient(135deg, #ffffff, #f3f4f6)',
          animation: 'fadeIn 0.8s ease-in-out',
        }}
      >
        <h2 className="mb-4 text-center" style={{ fontWeight: 'bold', color: '#2e8b57' }}>
          📅 Book Your Rental Property
        </h2>

        {submitted && (
          <Alert 
            variant="success" 
            onClose={() => setSubmitted(false)} 
            dismissible 
            className="text-center"
          >
            ✅ Booking request submitted successfully!
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label><FaUser className="me-2 text-success" /> Full name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="form-field"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><FaPhone className="me-2 text-success" /> Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 12345 67890"
              required
              className="form-field"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><FaEnvelope className="me-2 text-success" /> Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              className="form-field"
            />
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label><FaHome className="me-2 text-success" /> Property Type</Form.Label>
                <Form.Select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  className="form-field"
                >
                  <option value="">Select</option>
                  <option value="1BHK">1 BHK</option>
                  <option value="2BHK">2 BHK</option>
                  <option value="3BHK">3 BHK</option>
                  <option value="Villa">Villa</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label><FaMapMarkerAlt className="me-2 text-success" /> Preferred Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Eg. Andheri, Mumbai"
                  required
                  className="form-field"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label><FaCalendarAlt className="me-2 text-success" /> Booking Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="form-field"
            />
          </Form.Group>

          <div className="d-grid">
            <Button 
              variant="success" 
              size="lg" 
              type="submit"
              style={{ 
                background: 'linear-gradient(45deg, #2ecc71, #27ae60)', 
                border: 'none',
                transition: '0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              🚀 Book Now
            </Button>
          </div>
        </Form>

        <style>
          {`
            .form-field {
              border-radius: 10px;
              padding: 10px;
            }
            @keyframes fadeIn {
              from {opacity: 0; transform: translateY(20px);}
              to {opacity: 1; transform: translateY(0);}
            }
          `}
        </style>
      </Container>
    </>
  );
};

export default BookNowForm;