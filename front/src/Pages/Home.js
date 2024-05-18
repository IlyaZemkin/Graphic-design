import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox';
import { Container, Card, Button } from 'react-bootstrap';
import creativasImg from '../assets/creativas.jpg';
import packoneImg from '../assets/pack1.jpg';
import packtwoImg from '../assets/pack2.jpg';

export default class Home extends Component {
  render() {
    return (
    <>
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4">Cards</h2>
        <div text-align="left">
          <Card style={{ width: '17rem' }} className="mt-3" border="succes">
            <Card.Img 
              className="d-block w-100"
              height={230}
              variant="top"
              src={ creativasImg }
              alt="Creativas"
            />
            <Card.Body>
              <Card.Title>Ну какая-та карточка</Card.Title>
              <Card.Text>DADADADADdadadadadDaDaDadaAdadASsdDSd</Card.Text>
              <Button variant="primary" >About cards</Button>
            </Card.Body>
          </Card>
        </div>

        <div text-align="center">
          <Card style={{ width: '17rem' }} className="mt-3" text="primary">
            <Card.Body>
              <Card.Title>Ну какая-та карточка</Card.Title>
              <Card.Text>DADADADADdadadadadDaDaDadaAdadASsdDSd</Card.Text>
              <Button variant="primary" >About cards</Button>
            </Card.Body>
            <Card.Img 
              className="d-block w-100"
              variant="bottom"
              src={ packoneImg }
              alt="Packone"
            />
          </Card>
        </div>

        <div text-align="center">
          <Card style={{ width: '17rem' }} className="mt-3">
            <Card.Img 
              className="d-block w-100"
              variant="top"
              src={ packtwoImg }
              alt="Packtwo"
            />
            <Card.Body>
              <Card.Title>Ну какая-та карточка</Card.Title>
              <Card.Text>DADADADADdadadadadDaDaDadaAdadASsdDSd</Card.Text>
              <Button variant="primary" >About cards</Button>
            </Card.Body>
          </Card>
        </div>

        <div text-align="right">
          <Card style={{ width: '17rem' }} className="mt-3" text="primary">
            <Card.Body>
              <Card.Title>Ну какая-та карточка</Card.Title>
              <Card.Text>DADADADADdadadadadDaDaDadaAdadASsdDSd</Card.Text>
              <Button variant="primary" >About cards</Button>
            </Card.Body>
            <Card.Img 
              className="d-block w-100"
              variant="bottom"
              src={ packoneImg }
              alt="Packone"
            />
          </Card>
        </div>

      </Container>
    </>
    )
  }
}
