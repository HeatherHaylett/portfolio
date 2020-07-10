import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function Exhibit(props) {
    return(
        <Container >
          <Row className='align-items-center'>
            <Col md={3} >
            <Figure>
              <Figure.Image
                width={100}
                height={'auto'}
                alt="171x180"
                src={props.item.imgSrc}
              />
              <Accordion defaultActiveKey="0">
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <Figure.Caption>
                    {props.item.subTitle}
                  </Figure.Caption>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <p>Hello! I'm the body</p>
                </Accordion.Collapse>
              </Accordion>
            </Figure>
            </Col>
            <Col md={9}>
              <Image className='src' src={props.item.screenShot} alt={props.item.title} fluid/>
            </Col>
          </Row>
        </Container>
    );
}

export default Exhibit;
