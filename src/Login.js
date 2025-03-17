import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 contact-page">
      <Row className="w-100">
        <Col xs={12} sm={10} md={8} lg={6} className="mx-auto">
          <Card style={{ backgroundColor:" #ff98a8", borderRadius: '10px' }} className="p-4 shadow">
            <Card.Body>
              <h2 className="text-center mb-4" style={{ color: "white", borderRadius: '10px' }}>Login</h2>
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label style={{ color: "white" }}>Email address or Phone No</Form.Label>
                  <Form.Control type="email" placeholder="Enter email or Phone No" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label style={{ color: "white" }}>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="outline-light" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
              <div className="text-center mt-3 text-light">
                <small>
                  Don't have an account? <a href="/Register">Register</a>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
