import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Hero from '../components/Hero.js';
import MainImage from '../components/MainImage.js';



function HomePage(props) {
  return (
    <Container>
      <Row xs={1} md={2}>
        <Col className="d-flex justify-content-center" >
          <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        </Col>
        <Col className="d-flex justify-content-center" >< MainImage /></Col>
      </Row>
    </Container>
  )
}

export default HomePage;