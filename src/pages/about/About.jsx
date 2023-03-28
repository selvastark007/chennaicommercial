import React from 'react'

// Bootstarp
import {Container,Row,Col} from 'react-bootstrap';

// gif
import Bulid from '../../assets/images/building-gif-min.gif'

// sass
import './About.scss'
 
const About = () => {
  return (
    <>
      <div className="about-wrapper">
          <Container className="about py-4">
            <Row className='d-flex about-content'>
              <Col >
                <h3>About Chennai Commercials</h3>
                <p>Chennai commercials is an exclusive real estate concern for commercial property dealings in Chennai. We deals with wide range of portfolio in commercial properties include office space rental, showroom space rental, warehouse rental, fully furnished office space rental and IT park for rent. 
                </p>
                <p>We have commercial spaces available in various ranges starts from 1000 sqft to 50000 sft. We have been serving corporate, IT companies, branded retailers in choosing the commercial property for more than 3 years. The website chennaicommercials.</p>
              </Col>
              <Col>
               <img src={Bulid} alt="build-gif" />
              </Col>
            </Row>
          </Container>
      </div>
    </>
  )
}

export default About