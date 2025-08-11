import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import './AboutUs.css'; // Reuse animations or styles

export default function PrivacyPolicy() {
    const navigate = useNavigate();

    return (
        <div
            style={{
                background: "#f4f6f9",
                minHeight: "100vh",
                paddingTop: "40px",
                paddingBottom: "60px",
            }}
            className="fade-slide"
        >
            <Container>
                {/* Back Button */}
                <div className="mb-3">
                    <Button
                        variant="outline-dark"
                        onClick={() => navigate("/owner1")}
                        className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill shadow-sm"
                    >
                        <FaArrowLeft />
                        Back to Owner Page
                    </Button>
                </div>

                {/* Heading */}
                <h2
                    className="text-center mb-2"
                    style={{ fontWeight: "700", fontSize: "2.3rem", color: "#2c3e50" }}
                >
                    Privacy Policy
                </h2>
                <p
                    className="text-center text-muted mb-5"
                    style={{ fontSize: "1.1rem" }}
                >
                    Learn how No Broker collects, uses, and protects your personal data.
                </p>

                {/* Content */}
                <Row className="justify-content-center">
                    <Col md={100}>
                        <Card className="p-5 shadow-lg border-0 rounded-4" style={{ background: "#ffffff" }}>
                            <Card.Body>
                                <h4>1. Information We Collect</h4>
                                <ul>
                                    <li>
                                        <p>This includes your name, email address, mobile number, property details you list, and any other information you provide voluntarily through forms or interactions.</p>
                                    </li>
                                     <li>
                                        <p>We use cookies and similar tools to store user preferences, monitor site performance, and offer a customized experience.</p>
                                    </li>
                                </ul>
                                <h4>2. How We Use Your Information</h4>
                               <ul>
                                    <li>
                                        <p>To create and manage your user account.</p>
                                    </li>
                                     <li>
                                        <p>To allow interaction with other users (for example, tenants contacting property owners).</p>
                                    </li>
                                     <li>
                                        <p>To improve our platform through feedback, behavior tracking, and performance data.</p>
                                    </li>
                                </ul>

                                <h4>3. Data Sharing</h4>
                                <ul>
                                    <li>
                                        <p>We are committed to protecting your privacy.</p>
                                    </li>
                                     <li>
                                        <p>We do not sell or rent your personal data to any third party.</p>
                                    </li>
                                </ul>

                                <h4>4. Your Rights</h4>
                               <ul>
                                    <li>
                                        <p><strong>Access:</strong> You can view the personal information we have collected about you.</p>
                                    </li>
                                     <li>
                                        <p><strong>Correction:</strong> You can edit or update your details through your profile.</p>
                                    </li>
                                     <li>
                                        <p><strong>Deletion:</strong> You can request account deactivation and data deletion by contacting support.</p>
                                    </li>
                                     <li>
                                        <p><strong>Cookies:</strong> You can modify your browser settings to refuse or clear cookies.</p>
                                    </li>
                                </ul>

                                <h4>5. Contact</h4>
                               <ul>
                                    <li>
                                        <p>📧 Email: support@owner.com</p>
                                    </li>
                                     <li>
                                        <p>📞 Phone: [ +91‑12345‑67890]</p>
                                    </li>
                                     <li>
                                        <p>📍 Address: [Nashik, Maharashtra]</p>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
