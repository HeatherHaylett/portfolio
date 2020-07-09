import React, { Component } from 'react';
import Pdf from '../assets/Resume-Portfolio.pdf';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ResumeImage from '../components/ResumeImage';

class PDFViewer extends Component {

  render() {

    return (
      <Container>
        <Col >
          <Row className="d-flex justify-content-center">
        <Button href = {Pdf}
            target = "_blank"
            rel="noopener noreferrer"
            className="mt-4"
            variant="dark"
            >
          Download PDF
        </Button>
        </Row>
        <Row className="d-flex justify-content-center">
        <ResumeImage />
        </Row>
        </Col>
      </Container>
 
 

    );
  
  }
}

export default PDFViewer;