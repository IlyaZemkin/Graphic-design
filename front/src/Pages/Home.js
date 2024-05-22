import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox';
import { Container, Card, Button, CardGroup } from 'react-bootstrap';
import tovarsImg from '../assets/tovars.png';
import tovarsoneImg from '../assets/tovars1.png';
import tovarstwoImg from '../assets/tovars2.png';
import tovarsthreeImg from '../assets/tovars3.png';

export default class Home extends Component {
  render() {
    return (
    <>
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4">Услуги</h2>
        <CardGroup>
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
              <Button variant="primary" >Об услуге</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '17rem' }} className="mt-3" text="primary">
            <Card.Body>
              <Card.Title>Превью / Баннер</Card.Title>
              <Card.Text>◉ Превью/Баннер - 300₽ <p>◉ Отзывы - ☆☆☆☆☆</p> ◉ Оплата осуществляется на: СберБанк <p>◉ Остальные услуги уточнять</p> ✉Для заказа/вопросов писать - https://vk.com/itsnelxne <p>Укрась свой видеоролик! Опыт работы, более 3-х лет.</p></Card.Text>
              <Button variant="primary" >Об услуге</Button>
            </Card.Body>
            <Card.Img 
              className="d-block w-100"
              variant="bottom"
              src={ tovarsoneImg }
              alt="Packone"
            />
          </Card>

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
      </Container>
    </>
    )
  }
}
