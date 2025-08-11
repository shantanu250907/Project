// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
// import './ContactUs.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Message Sent:', formData);
//     setSubmitted(true);
//     setFormData({ name: '', email: '', subject: '', message: '' });
//     setTimeout(() => setSubmitted(false), 4000);
//   };

//   return (
//     <div className="contact-section">
//       <Container className="contact-container">
//         <h2 className="text-center mb-4">📩 Contact Us</h2>
//         {submitted && <Alert variant="success">Message sent successfully!</Alert>}
//         <Card className="contact-card">
//           <Row className="p-4">
//             <Col md={6}>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="formName" className="mb-3">
//                   <Form.Label>Your Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     placeholder="Enter your name"
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formEmail" className="mb-3">
//                   <Form.Label>Email Address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     placeholder="Enter your email"
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formSubject" className="mb-3">
//                   <Form.Label>Subject</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     placeholder="Enter subject"
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formMessage" className="mb-3">
//                   <Form.Label>Message</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={4}
//                     name="message"
//                     value={formData.message}
//                     placeholder="Type your message..."
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Button variant="primary" type="submit" className="w-100">
//                   Send Message
//                 </Button>
//               </Form>
//             </Col>
//             <Col md={6} className="d-flex align-items-center mt-4 mt-md-0">
//               <div className="contact-info">
//                 <h5>🏢 Our Office</h5>
//                 <p>123 Housing Lane,<br />Mumbai, MH - 400001<br />India</p>
//                 <p><strong>Email:</strong> support@rentalhub.com</p>
//                 <p><strong>Phone:</strong> +91-9876543210</p>
//               </div>
//             </Col>
//           </Row>
//         </Card>
//       </Container>
//     </div>
//   );
// };

// export default ContactUs;
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function AddRegistrationForm() {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/registration'); 
  };

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name",name);
      formData.append("email",email);
      formData.append("password",password);
      formData.append("image",image);

      const config = {
        Headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await axios.post("http://localhost:8000/register",formData,config);

      if(response.status === 200 || response === 201) {
        alert("Registration successful")
        resetForm();
      }
      else 
      {
        alert("Something went wrong. please try again");
      }
    }
     catch(error)
      {
        console.error("Error while submitting the form:",error);
        alert("An error occurred while submitting the form");
      }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setImage(null);
  };

  return (
    
    <Container>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" onClick={handleAddClick}>
          View Registration
        </Button>
      </div>

      <Card>
        <Card.Header>
          <h4>Registration Form</h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formRole">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="Enter password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formRole">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])}/>
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddRegistrationForm;
