import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Col, Row } from 'react-bootstrap';

function Footer() {
  return (
    <footer className=" text-white py-4">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Welcome to Cake Shop! We specialize in creating delicious and beautifully designed cakes for every occasion. Quality and taste are our priorities.
            </p>
          </Col>

          {/* Contact Section */}
          <Col md={4}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Phone: +123 456 7890</li>
              <li>Email: info@cakeshop.com</li>
              <li>Address: 123 Cake Lane, Dessert City</li>
            </ul>
          </Col>

          {/* Quick Links Section */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/menu" className="text-white text-decoration-none">
                  Menu
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-white" />
        <div className="text-center">
          <p>© 2024 Cake Shop. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
