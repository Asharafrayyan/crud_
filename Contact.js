import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../src/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  return (
    <Container fluid className="contact-page1 py-5">
      <Row className="text-center mb-5" >
        <Col>
          <h1 className="image-caption2">Contact Us</h1>
          <p className="contact-content">We would love to hear from you! Fill out the form below or reach out using the contact details provided.</p>
        </Col>
      </Row>
      <Row className="align-items-start">
        {/* Contact Form */}
        <Col md={6} className="mb-4 " >
          <h2 className="image-caption2">Get in Touch</h2>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label className="contact-content">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label className="contact-content">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label className="contact-content">Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message here..." />
            </Form.Group>
            <Button variant="info" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

        {/* Shop Information */}
        <Col md={6} className="mb-4" >
         
           <h2 className="image-caption2">Visit Us In Below Address</h2>
           <br></br>
            <p className="contact-content"><strong>Sweet haven Cake Shop</strong>,we have the most memorable and delicious cake ,if you need the service , then please trease the address <br />
            143, Cake Lane,  City  Centre, Chennai, tamilnadu <br />
            Phone: 9342552346 <br />
            Email: sweethaven@gmail.com
          </p>
          <h2 className="image-caption2"><strong>Follow Us</strong></h2>
          <div className="d-flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={30} style={{ color: "#3b5998" }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={30} style={{ color: "#E4405F" }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter size={30} style={{ color: "#1DA1F2" }} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
