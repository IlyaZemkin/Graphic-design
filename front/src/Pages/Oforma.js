import React, { Component } from 'react';
import { Container, Col, Row, Card, ListGroup, Button } from 'react-bootstrap';
import tovarsImg from '../assets/tovars.png';

export default class Oforma extends Component {
  render() {
    return (
        <>
        <Container>
          <Row>
            <Col md="9">
            <Card className="m-5" border="succes">
                <img mt-2
                  width={869}
                  height={869}
                  className="mr-3"
                  src={ tovarsImg }
  
                />
                <Card.Body className="text-center">
                  <h3>Оформление социальных сетей</h3><br></br>
                  <p>◉ Оформление Вк / Ют - от 699 ₽:<br></br>

                    • Правила группы - https://vk.com/topic-182694935_47610420<br></br>
                    • Отзывы - https://vk.com/topic-185604535_41300982<br></br>
                    • Примеры работ - https://vk.com/album-182694935_263193136<br></br>

                    ◉Оплата осуществляется на: Сбер<br></br>
                    ◉ Остальные услуги уточнять<br></br>
                    ✉Для заказа/вопросов писать - <Button variant="warning" href="https://vk.com/itsnelxne">сюда</Button></p>
                </Card.Body>
              </Card>
            </Col>
            </Row>
        </Container>
        </>
    )
  }
}
