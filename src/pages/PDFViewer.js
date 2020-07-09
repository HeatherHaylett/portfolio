import React, { Component } from 'react';
import Pdf from '../assets/Resume-Portfolio.pdf';

import Button from 'react-bootstrap/Button';

class PDFViewer extends Component {

  render() {

    return (
      <div className = "App">
        <Button href = {Pdf}
            target = "_blank"
            rel="noopener noreferrer"
            className="mt-4"
            variant="dark"
            >
          Download PDF
        </Button>
      </div>
    );
  }
}

export default PDFViewer;