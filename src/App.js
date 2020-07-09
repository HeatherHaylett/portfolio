import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  // Prompt
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import './App.scss';

import Footer from '../src/components/Footer.js';
import HomePage from './pages/HomePage.js';
import MyWorkPage from './pages/MyWorkPage.js';
import ContactPage from './pages/ContactPage.js';
import PDFViewer from './pages/PDFViewer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Heather Haylett',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'My Work', path: '/work' },
        { title: 'Contact', path: '/contact' },
        { title: 'Resume', path: '/resume' }
      ],
      home: {
        title: 'Curious Intuitive Self-Starter',
        subtitle: 'Software Engineer',
        text: `Hi, I'm Heather! A software engineer with a passion for full-stack applications.
        I think systematically and excel in defining, structuring, and organizing data.
        I write both front-end and back-end code ensuring that an application
        is optimized with a high quality user interface. I have a big picture focus and
        never overlook the importance of understandable code.`
      },
      work: {
        title: 'my work',
      },
      contact: {
        title: 'contact',
      },
      resume: {
        title: 'resume',
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
              <Link className="nav-link" to='/resume'>Resume</Link>
              <Link className="nav-link" to='/contact'>Contact</Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>

              <Route path='/' exact render={() =>
                <HomePage title={this.state.home.title}
                subTitle={this.state.home.subtitle}
                text={this.state.home.text} /> }/>
              <Route path='/work' render={() =>
                <MyWorkPage title={this.state.work.title} /> }/>
              <Route path='/resume' render={() =>
                <PDFViewer title={this.state.resume.title} /> }/>
              <Route path='/contact' render={() =>
                <ContactPage title={this.state.contact.title} /> }/>
        <Footer />
      </Container>
    </Router>
    );
  }
}

export default App;
