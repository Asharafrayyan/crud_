import React from "react";
import { Card,Button,Col,Container,Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner3 from "../src/Image/creative1.jpg";
import Banner1 from "../src/Image/creative2.jpg";
import Banner2 from "../src/Image/creative3.jpeg";
import Banner4 from "../src/Image/sign1.jfif";
import Banner5 from "../src/Image/sign2.jpg";
import Banner6 from "../src/Image/sign3.jpg";
import Banner7 from "../src/Image/regular1.jpg";
import Banner8 from "../src/Image/regular2.jpg";
import Banner9 from "../src/Image/regular3.jpg";
import '../src/index.css';

function Menu(){
    return (
        <Container className="mt-4">
          <h1 className="image-caption1">CREATIVE CAKES</h1>
        <Row className="justify-content-center">
          {/* Card 1 */}
          <Col xs={12} sm={6} md={4} className="mb-4 ">
            <Card style={{ width: '100%' }} className="menu-div">
              <Card.Img variant="top" src={Banner3} alt="Cake Image" className="menu-image" />
              <Card.Body>
                <Card.Title>Angry bird Cake</Card.Title>
                <Card.Text>
                  A rich and moist chocolate cake topped with creamy fudge frosting. Perfect for any celebration!
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-success fw-bold">Rs.1200</span>
                  <Button variant="info" onClick={() => alert('Order placed!')}>Order Now</Button>
                  <Button variant="danger" onClick={() => alert('Order placed!')}>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
  
          {/* Card 2 */}
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card style={{ width: '100%' }} className="menu-div">
              <Card.Img variant="top" src={Banner2} alt="Cake Image" className="menu-image"/>
              <Card.Body>
                <Card.Title>Vanilla Sun Cake</Card.Title>
                <Card.Text>
                  A delightful vanilla sponge cake topped with whipped cream and strawberries. Perfect for any occasion!
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-success fw-bold">Rs.1000</span>
                  <Button variant="info" onClick={() => alert('Order placed!')}>Order Now</Button>
                  <Button variant="danger" onClick={() => alert('Order placed!')}>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
  
          {/* Card 3 */}
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card style={{ width: '100%' }} className="menu-div">
              <Card.Img variant="top" src={Banner1} alt="Cake Image" className="menu-image" />
              <Card.Body>
                <Card.Title>Yellow Emoji Cake</Card.Title>
                <Card.Text>
                  A classic red velvet cake with cream cheese frosting. A treat for your taste buds!
                  <br/> 
                  <br/>  
                                                    
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-success fw-bold">Rs.1200</span>
                  <Button variant="info" onClick={() => alert('Order placed!')}>Order Now</Button>
                  <Button variant="danger" onClick={() => alert('Order placed!')}>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
      

        <h1 className="image-caption1">SIGNATURE CAKES</h1>
           
            {/* Card 3 */}
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card style={{ width: '100%' }} className="menu-div">
              <Card.Img variant="top" src={Banner4} alt="Cake Image" className="menu-image"/>
              <Card.Body>
                <Card.Title>Black chocolate Cake</Card.Title>
                <Card.Text>
                  A classic chocolate cake with cream cheese frosting. A treat for your taste buds!
                  <br/> 
                  <br/>  
                                                    
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-success fw-bold">Rs.1500</span>
                  <Button variant="info" onClick={() => alert('Order placed!')}>Order Now</Button>
                  <Button variant="danger" onClick={() => alert('Order placed!')}>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
            

             {/* Card 3 */}
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card style={{ width: '100%' }} className="menu-div">
            <Card.Img variant="top" src={Banner5} alt="Cake Image" className="menu-image"/>
              <Card.Body>
                <Card.Title>Red Velvet Cake</Card.Title>
                <Card.Text>
                  A classic red velvet cake with cream cheese frosting. A treat for your taste buds!
                  <br/> 
                  <br/>  
                                                    
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-success fw-bold">Rs.2000</span>
                  <Button variant="info" onClick={() => alert('Order placed!')}>Order Now</Button>
                  <Button variant="danger" onClick={() => alert('Order placed!')}>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
            


             {/* Card 3 */}
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card style={{ width: '100%' }} className="menu-div">
            <Card.Img variant="top" src={Banner6} alt="Cake Image" className="menu-image"/>
              <Card.Body>
                <Card.Title>Gulobjam Cake</Card.Title>
                <Card.Text>
                  A classic velvet cake with cream cheese frosting. A treat for your taste buds!
                  <br/> 
                  <br/>  
                                                    
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-success fw-bold">Rs.1600</span>
                  <Button variant="info" onClick={() => alert('Order placed!')}>Order Now</Button>
                  <Button variant="danger" onClick={() => alert('Order placed!')}>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <h1 className="image-caption1">REGULAR CAKES</h1>
           
           {/* Card 3 */}
         <Col xs={12} sm={6} md={4} className="mb-4">
           <Card style={{ width: '100%' }} className="menu-div">
           <Card.Img variant="top" src={Banner7} alt="Cake Image" className="menu-image"/>
             <Card.Body>
               <Card.Title>Venilla DoubleLayer Cake</Card.Title>
               <Card.Text>
                 A classic Venilla cake with cream cheese frosting. A treat for your taste buds!
                 <br/> 
                 <br/>  
                                                   
               </Card.Text>
               <div className="d-flex justify-content-between align-items-center">
                 <span className="text-success fw-bold">Rs.800</span>
                 <Button variant="info" onClick={() => alert('Order placed!')}>Order Now</Button>
                 <Button variant="danger" onClick={() => alert('Order placed!')}>Add to Cart</Button>
               </div>
             </Card.Body>
           </Card>
         </Col>
           

            {/* Card 3 */}
         <Col xs={12} sm={6} md={4} className="mb-4">
           <Card style={{ width: '100%' }} className="menu-div">
           <Card.Img variant="top" src={Banner8} alt="Cake Image" className="menu-image"/>
             <Card.Body>
               <Card.Title>Regular Chocolate Cake</Card.Title>
               <Card.Text>
                 A classic Chocolate cake with cream cheese frosting. A treat for your taste buds!
                 <br/> 
                 <br/>  
                                                   
               </Card.Text>
               <div className="d-flex justify-content-between align-items-center">
                 <span className="text-success fw-bold">Rs.1200</span>
                 <Button variant="info" onClick={() => alert('Order placed!')}>Order Now</Button>
                 <Button variant="danger" onClick={() => alert('Order placed!')}>Add to Cart</Button>
               </div>
             </Card.Body>
           </Card>
         </Col>
           


            {/* Card 3 */}
         <Col xs={12} sm={6} md={4} className="mb-4">
           <Card style={{ width: '100%' }} className="menu-div">
           <Card.Img variant="top" src={Banner9} alt="Cake Image" className="menu-image"/>
             <Card.Body>
               <Card.Title>Doramon Cake</Card.Title>
               <Card.Text>
                 A classic Blue creamed cake with cream cheese frosting. A treat for your taste buds!
                 <br/> 
                 <br/>  
                                                   
               </Card.Text>
               <div className="d-flex justify-content-between align-items-center">
                 <span className="text-success fw-bold">Rs.2100</span>
                 <Button variant="info" onClick={() => alert('Order placed!')}>Order Now</Button>
                 <Button variant="danger" onClick={() => alert('Order placed!')}>Add to Cart</Button>
               </div>
             </Card.Body>
           </Card>
         </Col>
        </Row>
      </Container>



    );
}
export default Menu;