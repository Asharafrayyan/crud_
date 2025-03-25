
import React from "react";
import { Carousel,Col,Container,Row,Nav,Navbar,Button,FormControl,Form,Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Banner1 from "../src/Image/delivery.avif";
import Banner2 from "../src/Image/fresh.avif";
import Banner3 from "../src/Image/delivery1.avif";
import Banner4 from "../src/Image/chicken burger.avif";
import Banner5 from "../src/Image/pizza.jpg";
import Banner6 from "../src/Image/french.avif";
import Banner7 from "../src/Image/about.avif";
import Banner8 from "../src/Image/card-pizza.avif";
import Banner10 from "../src/Image/card-fry.avif";
import Banner9 from "../src/Image/rightbg.webp";
import { Link } from "react-router-dom";

const foodItems = [
  {
    name: "Chicken Burger",
    price: "$3.50",
    rating: 4.5,
    reviews: 160,
    image:"https://img.freepik.com/free-photo/side-view-chicken-burger-with-sliced-tomato-lettuce-board_141793-4817.jpg?ga=GA1.1.1202997549.1727259126&semt=ais_hybrid",
  },
  {
    name: "Chicken Pizza",
    price: "$4.20",
    rating: 4.5,
    reviews: 142,
    image: "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?ga=GA1.1.1202997549.1727259126&semt=ais_hybrid",
  },
  {
    name: "Chicken Fry",
    price: "$5.00",
    rating: 4.5,
    reviews: 123,
    image: "https://img.freepik.com/free-photo/close-up-fried-chicken-drumsticks_23-2148682835.jpg?ga=GA1.1.1202997549.1727259126&semt=ais_hybrid",
  },
    ];
function Home(){
    return(
      <>
      <div>
     
     {/* Main Content */}
     <main className="container my-5 text-center text-lg-start">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold text-danger">
              All Fast Food is Available at{" "}
              <span className="bg-warning px-2">Foodle</span>
            </h2>
            <p className="mt-3">
              We Are Just A Click Away When You Crave For Delicious Fast Food
            </p>
            <div className="mt-4">
              <Button variant="danger" className="me-3 px-4 py-2" href="crudpage">
                Buy Now
              </Button>
              <Button variant="outline-secondary" className="px-4 py-2">
                How To Order
              </Button>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img src={Banner9} alt="Food" className="img-fluid max-w-full rounded-lg shadow-lg rightbg" />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <Container className="py-4">
      <Row className="justify-content-center text-center feature-section p-3 rounded shadow-sm">
        <Col md={4} className="feature-box">
          <div className="icon-circle">
            <img src={Banner1} alt="Fast Delivery" className="icon-img rightbg2" />
          </div>
          <h3 className="feature-title">Fast Delivery</h3>
          <p className="feature-text">The Food Will Be Delivered To Your Home Within 1-2 Hours Of Your Ordering.</p>
        </Col>
        <Col md={4} className="feature-box">
          <div className="icon-circle">
            <img src={Banner2} alt="Fresh Food" className="icon-img rightbg2" />
          </div>
          <h3 className="feature-title">Fresh Food</h3>
          <p className="feature-text">Your Food Will Be Delivered 100% Fresh To Your Home.</p>
        </Col>
        <Col md={4} className="feature-box">
          <div className="icon-circle">
            <img src={Banner3} alt="Free Delivery" className="icon-img rightbg2" />
          </div>
          <h3 className="feature-title">Free Delivery</h3>
          <p className="feature-text">Your Food Delivery Is Absolutely Free. No Cost Just Order And Enjoy.</p>
        </Col>
      </Row>
    </Container>

    
    <Row className="mt-5 text-center">
        <Col>
          <h2 className="text-3xl font-bold">Best <span className="text-danger">Delivered</span> Categories</h2>
          <p className="text-muted">Here Are Some Of Our Best Distributed Categories. If You Want You Can Order From Here.</p>
        </Col>
      </Row>
      
      <Row className="mt-4 justify-content-center text-center category-section">
        <Col md={4} className="category-box">
          <img src={Banner4} alt="Chicken Burger" className="category-img " />
          <h3 className="category-title">Chicken Burger</h3>
          <a className="text-danger category-order order" href="crudpage">Order Now &gt;</a>
        </Col>
        <Col md={4} className="category-box">
          <img src={Banner5} alt="Chicken Pizza" className="category-img " />
          <h3 className="category-title">Chicken Pizza</h3>
          <a className="text-danger category-order order" href="crudpage">Order Now &gt;</a>
        </Col>
        <Col md={4} className="category-box">
          <img src={Banner6} alt="French Fries" className="category-img " />
          <h3 className="category-title">French Fries</h3>
          <a className="text-danger category-order order" href="crudpage">Order Now &gt;</a>
        </Col>
      </Row>
    </div>
    
    <Container className="food-container">
      <Row className="justify-content-center">
        {foodItems.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="d-flex justify-content-center">
            <Card className="food-card">
              <div className="image-container">
                <img src={item.image} alt={item.name} className="food-image" />
              </div>
              <Card.Body className="card_body">
                <Card.Title>{item.name}</Card.Title>
                <div className="rating">⭐⭐⭐⭐⭐ ({item.reviews})</div>
                <Card.Text className="price">{item.price}</Card.Text>
                <Button className="buy-btn">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    <Container className="food-container">
      <Row className="justify-content-center">
        {foodItems.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="d-flex justify-content-center">
            <Card className="food-card">
              <div className="image-container">
                <img src={item.image} alt={item.name} className="food-image" />
              </div>
              <Card.Body className="card_body">
                <Card.Title>{item.name}</Card.Title>
                <div className="rating">⭐⭐⭐⭐⭐ ({item.reviews})</div>
                <Card.Text className="price">{item.price}</Card.Text>
                <Button className="buy-btn">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>



    
    <div className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-section">
            <h2 className="about-title">About Us</h2>
            <p className="about-text">
              Welcome to Fooodish, your go-to place for delicious meals crafted with 
              love and passion. We prioritize quality ingredients, ensuring each dish 
              is a perfect blend of flavors and health.
            </p>
            <p className="about-text">
              Our journey started in 2023, aiming to deliver fresh and tasty food right 
              to your doorstep. Whether you're craving a quick snack or a full-course meal, 
              we've got you covered.
            </p>
            <Button className="learn-more-btn">Learn More</Button>
          </Col>
          <Col md={6} className="image-section">
            <img src={Banner7} alt="About Us" className="about-image" />
          </Col>
        </Row>
      </Container>
    </div>



    <div className="footer">
      <Container>
        <Row>
          <Col md={3} className="footer-section">
            <h4 className="footer-title">Fooodish</h4>
            <p>Continue Fooodish 2023 all rights reserved</p>
            <h5 className="follow-title">Follow Us On</h5>
            <div className="social-icons">
            </div>
          </Col>
          <Col md={3} className="footer-section">
            <h4 className="footer-title">Menu</h4>
            <ul>
              <li>Home</li>
              <li>Offers</li>
              <li>Service</li>
              <li>About Us</li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h4 className="footer-title">Information</h4>
            <ul>
              <li>Menu</li>
              <li>Quality</li>
              <li>Make a Choice</li>
              <li>Salad With Vegetable</li>
              <li>Fast Delivery</li>
              <li>Subscribe</li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul>
              <li>+123 456 789</li>
              <li>Explore</li>
              <li>Info@Fooodish.Com</li>
              <li>1245, New York, USA</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
    </>
    )
};

export default Home; 