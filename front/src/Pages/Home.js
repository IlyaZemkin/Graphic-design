import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox';
import { Container, Card, Button, CardGroup, Row, Col, Nav } from 'react-bootstrap';
import tovarsImg from '../assets/tovars.png';
import tovarsoneImg from '../assets/tovars1.png';
import tovarstwoImg from '../assets/tovars2.png';
import tovarsthreeImg from '../assets/tovars3.png';
import Backfon from '../components/Backfon';
import backfon from '../components/backfon.png';
import myface from '../components/myface.png';
import Footer from "../components/Footer.js"

export default class Home extends Component {
  render() {
    return (
    <>
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4">Услуги</h2>
        <CardGroup className="m-4">
          <CardGroup className="m-3">
          <Card style={{ width: '17rem' }} className="mt-3" border="succes">
            <Card.Img 
              className="d-block w-100"
              variant="top"
              src={ tovarsImg }
              alt="Creativas"
            />
            <Card.Body>
              <Card.Title>Оформление социальных сетей</Card.Title>
              <Card.Text>◉ Оформление Вк/Ют - от 699₽ <p>◉ Отзывы - ★★★★★</p> ◉ Оплата осуществляется на: СберБанк <p>◉ Остальные услуги уточнять</p> ✉Для заказа/вопросов писать - https://vk.com/itsnelxne</Card.Text>
              <Button variant="primary" href="/oforma">Об услуге</Button>
            </Card.Body>
          </Card>
          </CardGroup>

          <CardGroup className="m-3">
          <Card style={{ width: '17rem' }} className="mt-3" text="primary">
            <Card.Body>
              <Card.Title>Превью / Баннер</Card.Title>
              <Card.Text>◉ Превью/Баннер - 300₽ <p>◉ Отзывы - ☆☆☆☆☆</p> ◉ Оплата осуществляется на: СберБанк <p>◉ Остальные услуги уточнять</p> ✉Для заказа/вопросов писать - https://vk.com/itsnelxne <p>Укрась свой видеоролик! Опыт работы, более 3-х лет.</p></Card.Text>
              <Button variant="primary">Об услуге</Button>
            </Card.Body>
            <Card.Img 
              className="d-block w-100"
              variant="bottom"
              src={ tovarsoneImg }
              alt="Packone"
            />
          </Card>
          </CardGroup>

          <CardGroup className="m-3">
          <Card style={{ width: '17rem' }} className="mt-3">
            <Card.Img 
              className="d-block w-100"
              variant="top"
              src={ tovarstwoImg }
              alt="Packtwo"
            />
            <Card.Body>
              <Card.Title>Приватная группа</Card.Title>
              <Card.Text>◉ Вход - 500₽ <p>• Интересует, что находится в приватке? Скорее пиши!</p> <p>◉ Отзывы - ★★★★★</p> ◉ Оплата осуществляется на: СберБанк <p>◉ Остальные услуги уточнять</p> ✉Для заказа/вопросов писать - https://vk.com/itsnelxne</Card.Text>
              <Button variant="primary" >Об услуге</Button>
            </Card.Body>
          </Card>
          </CardGroup>

          <CardGroup className="m-3">
          <Card style={{ width: '17rem' }} className="mt-3" text="primary">
            <Card.Body>
              <Card.Title>Другие услуги</Card.Title>
              <Card.Text>◉ Всё обязательно обсуждается с дизайнером <p>◉ Отзывы - ☆☆☆☆☆</p> ◉ Оплата осуществляется на: СберБанк <p>◉ Остальные услуги уточнять</p> ✉Для заказа/вопросов писать - https://vk.com/itsnelxne <p>Приятные цены, и качественный результат.</p></Card.Text>
              <Button variant="primary" >Об услуге</Button>
            </Card.Body>
            <Card.Img 
              className="d-block w-100"
              variant="bottom"
              src={ tovarsthreeImg }
              alt="Packone"
            />
          </Card>
          </CardGroup>
        </CardGroup>
      </Container>
      <Backfon />
      
      <Container style={{ marginBottom: '30px'}} className="m-5">
        <Row>
          <Col md={7} className="text-center">
            <img src={myface} height={500} />
          </Col>
          <Col md={5}>
            <h2>Немного обо мне...</h2>
            <br></br>
            <p>Для меня графический дизайн - это хобби. Мне нравиться вдыхать жизнь в идеи, превращать пустые холсты в шедевры. Я чувствую глубокую связь с каждой работой, которую создавал, видя в ней отражение своей души.<br></br></p>

            <p>Часы перетекали в ночи, когда я терялся в потоке творчества. Проекты оживали на моём экране, как яркие звезды на темном небе. Мои глаза сияют восторгом, а усталость смывалась чувством выполненного долга.<br></br></p>

            <p>Всю свою душу я вкладываю в каждый дизайн, зная, что мои творения будут жить своей собственной жизнью, влияя на людей и оставляя неизгладимый след в мире. И в эти редкие моменты, когда я останавливалась и смотрю на свою работу, я чувствую себя по-настоящему живым, и я горд этим.</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
    )
  }
}
