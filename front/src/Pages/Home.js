import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Card, Button, CardDeck } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
    <>
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4">Cards</h2>
        <div>
          <Card style={{ width: '18rem' }} className="mt-3">
            <Card.Img 
              variant="top"
              src="https://s3-alpha.figma.com/hub/file/4844655935/4ad05657-3410-47d2-a647-b4aca8c6b4d0-cover.png"
            />
            <Card.Body>
              <Card.Title>Ну какая-та карточка</Card.Title>
              <Card.Text>DADADADADdadadadadDaDaDadaAdadASsdDSd</Card.Text>
              <Button variant="primary" >About cards</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="mt-3">
            <Card.Img 
              variant="top"
              src="https://s3-alpha.figma.com/hub/file/4844655935/4ad05657-3410-47d2-a647-b4aca8c6b4d0-cover.png"
            />
            <Card.Body>
              <Card.Title>Ну какая-та карточка</Card.Title>
              <Card.Text>DADADADADdadadadadDaDaDadaAdadASsdDSd</Card.Text>
              <Button variant="primary" >About cards</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="mt-3">
            <Card.Img 
              variant="top"
              src="https://s3-alpha.figma.com/hub/file/4844655935/4ad05657-3410-47d2-a647-b4aca8c6b4d0-cover.png"
            />
            <Card.Body>
              <Card.Title>Ну какая-та карточка</Card.Title>
              <Card.Text>DADADADADdadadadadDaDaDadaAdadASsdDSd</Card.Text>
              <Button variant="primary" >About cards</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
    )
  }
}
