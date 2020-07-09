import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero.js';
import MainImage from '../components/MainImage.js';
import Pdf from '../assets/Resume-Portfolio.pdf';


function HomePage(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
          <Button variant="dark" href="/work" className='mt-2'>My Work</Button>
          <Button variant="dark" href = {Pdf} target = "_blank" rel="noopener noreferrer" className='ml-2 mt-2'>Resume</Button>
        </Col>
        <Col><MainImage /></Col>
      </Row>
    </Container>
  )
}

export default HomePage;