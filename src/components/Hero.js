import React from 'react';

//import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

function Hero(props) {
  return (
    <Row>
      <Container>
            {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
            { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
            { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
      </Container>
    </Row>
  )
}

export default Hero;
