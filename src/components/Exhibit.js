import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';



function Exhibit(props) {
  return(
      <Container >
        <Row className='align-items-start m-30'>
          <Col md={3} >
            <Image
              width={75}
              height={'auto'}
              align={'center'}
              alt={props.item.title}
              src={props.item.imgSrc}
              className="d-inline-flex icons"
              rounded
              fluid
            />
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle as={Button} eventKey="1" variant="outline-secondary" block>
                  {props.item.subTitle}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <p className="lead font-weight-light">{props.item.description}</p>
              </Accordion.Collapse>
            </Accordion>
          </Col>
          <Col md={9}>
            <Image className='src' src={props.item.screenShot} alt={props.item.title} fluid/>
          </Col>
        </Row>
      </Container>
  );
}

export default Exhibit;
