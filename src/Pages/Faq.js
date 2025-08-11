import React from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import './AboutUs.css'; // If you have animations or custom styles

export default function Faq() {
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
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/019/872/929/small_2x/3d-minimal-faq-sign-answers-to-frequently-asked-questions-message-icon-with-a-faq-text-3d-illustration-free-png.png"
                        style={{ width: "100px" }}
                        alt="FAQ"
                    />{" "}
                    FAQ
                </h2>
                <p
                    className="text-center text-muted mb-5"
                    style={{ fontSize: "1.1rem" }}
                >
                    <strong>Frequently Asked Questions</strong>
                </p>

                {/* Main Content */}
                <Row className="justify-content-center">
                    <Col md={100}>
                        <Card className="p-5 shadow-lg border-0 rounded-4" style={{ background: "#ffffff" }}>
                            <Card.Body>
                                <Accordion defaultActiveKey="0" >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Owners Related</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>
                                                    <strong>Can I list my property until my account is verified?</strong>
                                                    <p>It is shown by default and can include any custom content. You can modify this section with text, images, or HTML as needed.</p>
                                                </li>
                                                 <li>
                                                    <strong>Why is my property listing not visible?</strong>
                                                    <p>Every listing on NoBroker.in is verified for its content, photo, location and genuine broker free ownership. Property is made active (visible for all) after these verifications.</p>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>General & Account Related</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>
                                                    <strong>Why do I need a verified account to use NoBroker.in services?</strong>
                                                    <p>At NoBroker.in our main aim is to eliminate brokers from whole rental scene. In order to achieve that we verify each owner/tenant's account and activate it after verifying that the user is genuine.</p>
                                                </li>
                                                 <li>
                                                    <strong>How long does it take for email verification?</strong>
                                                    <p>Email verification is very simple. As soon as you register you will receive a mail with link to verify your email. It hardly takes a couple of minutes.</p>
                                                </li>
                                                <li>
                                                    <strong>How will I know if my account is verified?</strong>
                                                    <p>You will be notified about the account verification via email and sms.</p>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Tenant/Seekers Related</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>
                                                    <strong>Can I view properties until my account is verified?</strong>
                                                    <p>Yes, you can search and shortlist the properties with an un-verified account. But to receive owner's email & phone number you will have to wait for the account verification to complete.</p>
                                                </li>
                                                 <li>
                                                    <strong>I am new to city, how can I use NoBroker to find a suitable house for me?</strong>
                                                    <p>To help new migrants to the city, we have map search feature which provides the exact location of the property on the map. You can also look for details such as nearby schools, hospital etc. on the map on the detail page of the property</p>
                                                </li>
                                                <li>
                                                    <strong>How will I know if my account is verified?</strong>
                                                    <p>You will be notified about the account verification via email and sms.</p>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
