import React from 'react';
import './App.scss';
import Image from 'react-bootstrap/Image';
import mainImage from './Haylett.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Heather's portfolio</h1>
        <Image src={mainImage} rounded />
      </header>
    </div>
  );
}

export default App;
