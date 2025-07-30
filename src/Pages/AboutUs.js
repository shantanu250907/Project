import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#f4f6f9", minHeight: "100vh", paddingTop: "40px", paddingBottom: "60px" }}>
      <Container>
        {/* Back Button */}
        <div className="mb-3">
          <Button
            variant="outline-dark"
            onClick={() => navigate("/owner1")}
            className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill shadow-sm"
          >
            <FaArrowLeft />
            Back to Owner Pagee
          </Button>
        </div>

        {/* Heading */}
        <h2 className="text-center mb-2" style={{ fontWeight: "700", fontSize: "2.3rem", color: "#2c3e50" }}>
          🏡 About Us
        </h2>
        <p className="text-center text-muted mb-5" style={{ fontSize: "1.1rem" }}>
          Discover how <strong>StaySmart Rentals</strong> is transforming the rental experience.
        </p>

        {/* Main Content */}
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="p-5 shadow-lg border-0 rounded-4" style={{ background: "#ffffff" }}>
              <Card.Body>
                <h4 className="mb-3">📌 Our Mission</h4>
                <p className="text-muted">
                  StaySmart Rentals is designed to bridge the gap between tenants and property owners.
                  Our mission is to make renting homes easier, faster, and more secure for everyone.
                </p>

                <h4 className="mt-4 mb-3">🚀 What We Offer</h4>
                <ul style={{ lineHeight: "1.8rem" }}>
                  <li>🔍 Smart property discovery and search filters</li>
                  <li>🛠️ Digital maintenance request system</li>
                  <li>📊 Transparent rental agreements and payment tracking</li>
                  <li>📱 Mobile-first design and instant notifications</li>
                </ul>

                <h4 className="mt-4 mb-3">👥 Who We Are</h4>
                <p className="text-muted">
                  We are a passionate team of developers, UI designers, and real estate analysts
                  building the next-gen rental system. From coding to customer care, we believe
                  in a user-first experience that puts transparency and ease at the center.
                </p>

                <h4 className="mt-4 mb-3">📫 Get in Touch</h4>
                <p>
                  Got a suggestion or partnership idea? Let’s talk:
                  <br />
                  <strong>Email:</strong> support@staysmart.com <br />
                  <strong>Phone:</strong> +91-9876543210
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
