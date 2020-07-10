import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import ensembleImg from '../assets/MyWork/ensemble.ico';
import ensembleSS from '../assets/MyWork/ensembleSS.png';
import howdyImg from '../assets/MyWork/Howdyport.jpg';
import howdySS from '../assets/MyWork/howdySS.png';
import doodlgeImg from '../assets/MyWork/doodlesociety.png';
import doodleSS from '../assets/MyWork/doodleSS.png';

import Exhibit from './Exhibit.js';

class Gallery extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        items: [
            {
                id: 0,
                title: 'Ensemble',
                subTitle: 'A place to jam with friends',
                imgSrc: ensembleImg,
                screenShot: ensembleSS,
                description: `I created an inbox notification system for Ensemble with GraphQL backed by Postgres.
                In the inbox I implemented a direct message system with Vue Bootstrap with a focus on intuitive UI.
                I was resposnible for deploying Ensemble to Azure to deliver the application into a production environment. 
                `,
                selected: false
            },
            {
                id: 1,
                title: 'Howdy',
                subTitle: 'Throw an online party to chat and play a game',
                imgSrc: howdyImg,
                screenShot: howdySS,
                description: `Working on Howdy I designed and built the applications RESTful API using Express.js.
                I also integrated geolocation to customize content shown based on location and distance which
                included creating a permission system to restrict access based on physical location.
                `,
                selected: false
            },
            {
                id: 2,
                title: 'Doodle Society',
                subTitle: `Draw on pictures you've uploaded`,
                imgSrc: doodlgeImg,
                screenShot: doodleSS,
                description: `I created real time messaging on top of WebSockets for Doodle Society.
                This included implementing a front-end user interface using modular React components
                which ensured a clean live chat layout created with CSS and Bootstrap.
                `,
                selected: false
            },
        ]
    }
}

createExhibit = (exhibitItem) => {
  let items = [...this.state.items];
  return items.map(exhibitItem => {
    return <Exhibit item={exhibitItem} key={exhibitItem.id} />
  })
}

render() {
  return(
      <Container fluid={true}>
          <Col className="justify-content-around">
              {this.createExhibit(this.state.items)}
          </Col>
      </Container>
  );
}

}



export default Gallery;
