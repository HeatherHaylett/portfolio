import React from 'react';
import './App.scss';
import mainImage from './Haylett.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Heather's portfolio</h1>
        <img src={mainImage} alt="Heather smiling at the camera"></img>
      </header>
    </div>
  );
}

export default App;
