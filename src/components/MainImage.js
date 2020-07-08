import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
//import Jumbotron from 'react-bootstrap/Jumbotron';

import mainImage from '../assets/Haylett.jpg'

function MainImage() {
  return (
    <Row>
      <Container d-flex>
          <Col md={6}>
            <Image src={mainImage} className='g-card-image'/>
          </Col>
      </Container>
    </Row>
  )
}

export default MainImage;
