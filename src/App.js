import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  // Prompt
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import './App.scss';

import Footer from '../src/components/Footer.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Heather Haylett',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'My Work', path: '/work' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'title',
        subtitle: 'subtitle',
        text: 'landing page text'
      },
      work: {
        title: 'my work',
      },
      contact: {
        title: 'contact',
      }
    }
  }
  render() {
    return (
    <Router>
      <Container className='p-0' fluid={true}>
        <NavBar className='border-bottom' bg='transparent' expand='lg'>
          <NavBar.Brand>Heather Haylett</NavBar.Brand>
          <NavBar.Toggle className='border-0' aria-controls="navbar-toggle"/>
          <NavBar.Collapse id="navbar-toggle">
            <Nav className='ml-auto'>
              <Link className="nav-link" to='/'>Home</Link>
              <Link className="nav-link" to='/work'>My Work</Link>
              <Link className="nav-link" to='/contact'>Contact</Link>
            </Nav>
          </NavBar.Collapse>
        </NavBar>
        <Footer />
      </Container>
    </Router>
    );
  }
}

export default App;
