import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container,Form,FormControl,Button } from 'react-bootstrap';
import '../index.css';
import Banner4 from "../pages/Image/logo.webp";
import { FaShoppingCart,AiOutlineHome, AiOutlineLogin, AiOutlineMenu } from "react-icons/fa";
// import "font-awesome/css/font-awesome.min.css";
function NavigationBar() {
  return (
    <Navbar  expand="lg" bg="bg-dark" sticky="top" variant='dark'>
      <Container>
         <img
                  className="d-block  logo"
                  src={Banner4}
                  alt="First slide"
                  style={{borderRadius:"5px"}}
                />
        <Navbar.Brand href="/" style={{ fontFamily:'arial' }}>SWEET HAVEN</Navbar.Brand> 

        {/* Search Bar next to Brand */}
        <Form className="d-none d-lg-flex ms-3" style={{ maxWidth: '300px' }}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-light" className="search-bar">Search  <i class="fa-solid fa-magnifying-glass"></i></Button>
        </Form>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/"><i class="fa-solid fa-house"></i> Home</Nav.Link>

            <Nav.Link href="/Login"><i class="fa-solid fa-right-to-bracket"></i> Login</Nav.Link>

            <Nav.Link href="/menu"><i class="fa-brands fa-product-hunt"></i> Menu</Nav.Link>

            <Nav.Link href="/contact"><i class="fa-regular fa-address-book"></i> Contact</Nav.Link>
            
            <Nav.Link href=""><i class="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
