import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
//import Jumbotron from 'react-bootstrap/Jumbotron';

import resumeImage from '../assets/resume.jpg'

function ResumeImage() {
  return (
    <Row>
      <Container d-flex='true'>
          <Col md={6}>
            <Image src={resumeImage} className='resume-image'/>
          </Col>
      </Container>
    </Row>
  )
}

export default ResumeImage;
