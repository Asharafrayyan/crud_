
import React from "react";
import { Carousel,Col,Container,Row,Nav,Navbar,Button,FormControl,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner1 from "../src/Image/c.png";
import Banner2 from "../src/Image/cc.png";
import Banner3 from "../src/Image/ccc.png";
import Banner4 from "../src/Image/creative1-1.png";
import Banner5 from "../src/Image/express-1.png";
import Banner6 from "../src/Image/regular-1.png";
import Banner7 from "../src/Image/anniversery.avif";
import Banner8 from "../src/Image/celebration.avif";
import Banner9 from "../src/Image/wedding.avif";
import { Link } from "react-router-dom";
function Home(){
    return(
      <>
      <div>
      <Carousel 
        interval={2000} 
        pause={false} 
        className="custom-carousel" 
        controls={false} 
        indicators={false}
      > 
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={Banner3}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption-center" style={{color:'#ff98a8'}}>
            <h3>Delicious Cakes</h3>
            <p>Experience the richness of freshly baked cakes, made just for you.</p>
            <button className="btn btn-danger me-2">Order Now</button>
            <button className="btn btn-info">View Details</button>
          </Carousel.Caption>
        </Carousel.Item>
    
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner2}
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption-center"  style={{color: 'white'}}>
            <h3>Celebrations Made Sweeter</h3>
            <p>Our cakes add a touch of sweetness to every special moment.</p>
            <button className="btn btn-danger me-2">Order Now</button>
            <button className="btn btn-info">View Details</button>
          </Carousel.Caption>
        </Carousel.Item>
    
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner1}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption-center"style={{color: '#221400'}}>
            <h3>Perfect for Every Occasion</h3>
            <p>Find your perfect cake to make every occasion memorable.</p>
            <button className="btn btn-danger me-2">Order Now</button>
            <button className="btn btn-info">View Details</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

        <h1 className="text-center mt-5 mb-5 image-caption1">Our Delicious Cakes</h1>
   <div className="container">
   <div className="row">
    <div className="col-md-4">
  <div className="category-item ">
    <Link to="/Menu">
      <img src={Banner4} alt="Cake1" className="categories-img" />
    </Link>
    <p className="image-caption">Creative Cake </p>
  </div>
  </div>

 <div className="col-md-4">
  <div className="category-item">
    <Link to="/Menu">
      <img src={Banner5} alt="Cake2" className="categories-img" />
    </Link>
    <p className="image-caption">Express Cake </p>
  </div>
  </div>

  <div className="col-md-4">
  <div className="category-item">
    <Link to="/Menu">
      <img src={Banner6} alt="Cake3" className="categories-img" />
      </Link>
    <p className="image-caption">Regular Cake </p>
  </div>
</div>
</div>
</div>


<h1 className="text-center mt-5 mb-5 image-caption1">Special Cakes</h1>
<div className="container">
   <div className="row">
    <div className="col-md-4">
  <div className="category-item">
    <Link to="/Menu">
      <img src={Banner9} alt="Cake1" className="categories-img" />
    </Link>
    <p className="image-caption">Wedding Cake </p>
  </div>
  </div>
 
 
    <div className="col-md-4">
  <div className="category-item">
    <Link to="/Menu">
      <img src={Banner8} alt="Cake2" className="categories-img" />
    </Link>
    <p className="image-caption">Birthday Cake </p>
  </div>
  </div>



    <div className="col-md-4">
  <div className="category-item">
    <Link to="/Menu">
      <img src={Banner7} alt="Cake3" className="categories-img" />
      </Link>
    <p className="image-caption">Celebration Cake </p>
  </div>
</div>
</div>
</div>

    </div>
    </>
    )
};

export default Home; 