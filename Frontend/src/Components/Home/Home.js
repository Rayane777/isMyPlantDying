import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';

import './Home.css'


export default function Home() {

   

    return (
        <div className='home'>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/"> IsMyPlantDying</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
       
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    

    <div>
      <div>
      <Carousel className="styled-div">
        <Carousel.Item>
          <img
            className="carouselImg"
            src={image1}
            alt="First slide"
          />
          <div className="carousel-overlay">
            <div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div>
            <div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div>
            <div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div><div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src={image2}
            alt="Second slide"
          />
          <div className="carousel-overlay">
            <div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div>
            <div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div>
            <div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div><div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src={image3}
            alt="Third slide"
          />
          <div className="carousel-overlay">
            <div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div>
            <div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div>
            <div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div><div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src={image4}
            alt="Second slide"
          />
          <div className="carousel-overlay">
            <div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div>
            <div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div>
            <div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div><div className="text-overlay">
              <h3>First Slide</h3>
              <p>This is the first slide of the carousel.</p>
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel>
      </div>
    </div>
        <div>
          
          <button>Start today!</button>
          
        </div>
        </div>
        
    )    
};