import React from 'react';
import { Container, Navbar, Form, FormControl, Nav, Row, Col, Card } from 'react-bootstrap';
import { FaUser, FaShoppingCart, FaExchangeAlt, FaUndo, FaHeadset } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      {/* Header with search, sign-in, and cart */}
      <Navbar bg="light" expand="lg" className="justify-content-between px-4">
        <Navbar.Brand href="#">Trend-Shop</Navbar.Brand>
        <Form inline className="d-flex flex-grow-1">
          <FormControl
            type="text"
            placeholder="Search products..."
            className="mr-2"
          />
        </Form>
        <Nav>
          <Nav.Link href="g/my-app/src/pages/SignUpPage.js"><FaUser size={24} /> Sign In</Nav.Link>
          <Nav.Link href="g/my-app/src/pages/CartPage.js"><FaShoppingCart size={24} /> Cart</Nav.Link>
        </Nav>
      </Navbar>

      {/* Image Carousel */}
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src="/images/image1.jpg" alt="carousel-item-1" />
          <p className="legend">Top Deal #1</p>
        </div>
        <div>
          <img src="/images/image2.jpg" alt="carousel-item-2" />
          <p className="legend">Top Deal #2</p>
        </div>
        <div>
          <img src="/images/image3.jpg" alt="carousel-item-3" />
          <p className="legend">Top Deal #3</p>
        </div>
      </Carousel>

    {/* Best Sellers Section */}
      <Container className="my-4">
        <h2>Best Sellers</h2>
        <Row>
          <Col md={3}>
            <Card className="my-2 product-card">
              <Card.Img variant="top" src="/images/image1.jpg" className="product-image" />
              <Card.Body>
                <Card.Title>Product 1</Card.Title>
                <Card.Text>Best quality product 1</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="my-2 product-card">
              <Card.Img variant="top" src="/images/image1.jpg" className="product-image" />
              <Card.Body>
                <Card.Title>Product 2</Card.Title>
                <Card.Text>Best quality product 2</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="my-2 product-card">
              <Card.Img variant="top" src="/images/image1.jpg" className="product-image" />
              <Card.Body>
                <Card.Title>Product 3</Card.Title>
                <Card.Text>Best quality product 3</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="my-2 product-card">
              <Card.Img variant="top" src="/images/image1.jpg" className="product-image" />
              <Card.Body>
                <Card.Title>Product 4</Card.Title>
                <Card.Text>Best quality product 4</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      <Container className="my-4">
        <h2>Trending Style</h2>
        <Row>
          <Col md={3}>
            <Card className="my-2 product-card">
              <Card.Img variant="top" src="/images/image2.jpg" className="product-image" />
              <Card.Body>
                <Card.Title>Product 1</Card.Title>
                <Card.Text>Best quality product 1</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="my-2 product-card">
              <Card.Img variant="top" src="/images/image2.jpg" className="product-image" />
              <Card.Body>
                <Card.Title>Product 2</Card.Title>
                <Card.Text>Best quality product 2</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="my-2 product-card">
              <Card.Img variant="top" src="/images/image2.jpg" className="product-image" />
              <Card.Body>
                <Card.Title>Product 3</Card.Title>
                <Card.Text>Best quality product 3</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="my-2 product-card">
              <Card.Img variant="top" src="/images/image2.jpg" className="product-image" />
              <Card.Body>
                <Card.Title>Product 4</Card.Title>
                <Card.Text>Best quality product 4</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>



      <Container className="my-4">
        <h2>Top syles</h2>
        <Row>
          <Col md={3}>
            <Card className="my-2 product-card">
              <Card.Img variant="top" src="/images/image3.jpg" className="product-image" />
              <Card.Body>
                <Card.Title>Product 1</Card.Title>
                <Card.Text>Best quality product 1</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="my-2 product-card">
              <Card.Img variant="top" src="/images/image3.jpg" className="product-image" />
              <Card.Body>
                <Card.Title>Product 2</Card.Title>
                <Card.Text>Best quality product 2</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="my-2 product-card">
              <Card.Img variant="top" src="/images/image3.jpg" className="product-image" />
              <Card.Body>
                <Card.Title>Product 3</Card.Title>
                <Card.Text>Best quality product 3</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="my-2 product-card">
              <Card.Img variant="top" src="/images/image3.jpg" className="product-image" />
              <Card.Body>
                <Card.Title>Product 4</Card.Title>
                <Card.Text>Best quality product 4</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      






      {/* Additional Info Section */}
      <Container className="additional-info my-5">
        <Row>
          <Col md={4} className="info-box text-center">
            <FaExchangeAlt size={40} className="info-icon" />
            <h5>Easy Exchange</h5>
            <p>Convenient exchange process</p>
          </Col>
          <Col md={4} className="info-box text-center">
            <FaUndo size={40} className="info-icon" />
            <h5>7 Days Return Policy</h5>
            <p>Return within 7 days for a full refund</p>
          </Col>
          <Col md={4} className="info-box text-center">
            <FaHeadset size={40} className="info-icon" />
            <h5>Best Customer Support</h5>
            <p>24/7 customer service for assistance</p>
          </Col>
        </Row>
      </Container>


  
    </div>
  );
};

export default HomePage;
