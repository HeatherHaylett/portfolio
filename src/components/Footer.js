import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SocialFollow from './SocialFollow.js';

function footer() {
  return (
    <footer className='mt-5'>
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className='p-0' md={3} sm={12}>
            Heather Haylett
          </Col>
          <Col>
            <SocialFollow />
          </Col>
          <Col className="text-right p-0" md={3}>
            Site built from scratch by Heather
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default footer;
