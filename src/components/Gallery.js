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
                description: ``,
                selected: false
            },
            {
                id: 1,
                title: 'Howdy',
                subTitle: 'Throw an online party to chat and play a game',
                imgSrc: howdyImg,
                screenShot: howdySS,
                description: ``,
                selected: false
            },
            {
                id: 2,
                title: 'Doodle Society',
                subTitle: `Draw on pictures you've uploaded`,
                imgSrc: doodlgeImg,
                screenShot: doodleSS,
                description: ``,
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
