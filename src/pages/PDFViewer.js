import React, { Component } from 'react';
import Pdf from '../assets/Resume-Portfolio.pdf';

class PDFViewer extends Component {

  render() {

    return (
      <div className = "App">
        <a href = {Pdf} target = "_blank" rel="noopener noreferrer">Download Pdf</a>
      </div>
    );
  }
}

export default PDFViewer;