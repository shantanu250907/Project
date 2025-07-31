import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import "./Feedback.css"; // Optional custom CSS

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.rating && formData.message) {
      console.log("Feedback submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", rating: "", message: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div style={{ background: "linear-gradient(to right, #e0f7fa, #fffde7)", minHeight: "100vh", paddingTop: "50px" }} className="fade-slide">
      <Container style={{ maxWidth: "700px" }}>
        <Card className="shadow-lg rounded-4 p-4 border-0">
          <h2 className="text-center mb-1" style={{ fontWeight: "700" }}>💬 We'd love your Feedback!</h2>
          <p className="text-muted text-center mb-4">Tell us how your experience was using our rental platform.</p>

          {submitted && (
            <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
              🎉 Thank you for sharing your thoughts with us!
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="feedbackName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="feedbackEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="feedbackRating">
              <Form.Label>Rate Your Experience</Form.Label>
              <Form.Select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
             <option>★☆☆☆☆</option>
            <option>★★☆☆☆</option>
            <option>★★★☆☆</option>
            <option>★★★★☆</option>
            <option>★★★★★</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="feedbackMessage">
              <Form.Label>Feedback Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="What did you love or what can we improve?"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <div className="text-center d-flex justify-content-between mt-4">
              <Button
                 variant="outline-secondary"
                 className="px-4 py-2"
                style={{
                fontWeight: "bold",
                fontSize: "1rem",
                borderRadius: "30px",
                transition: "all 0.3s",
                }}
                onClick={() => window.location.href = "/owner1"} // Or use useNavigate if using react-router
            >
                 🔙 Back
                </Button>

                <Button
                 variant="success"
                 type="submit"
                 className="px-4 py-2"
                style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                borderRadius: "30px",
                transition: "all 0.3s",
                }}
                    >
                 🚀 Submit Feedback
                </Button>  
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
