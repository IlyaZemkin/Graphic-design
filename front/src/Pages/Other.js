import React, { Component } from 'react';
import { Container, Col, Row, Card, ListGroup, Button, Nav } from 'react-bootstrap';
import tovarsImg from '../assets/tovars3.png';

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
                  <h3>Другие услуги</h3><br></br>
                  <p>◉ Всё обязательно обсуждается с дизайнером <br></br><br></br>

                    • Правила группы - <Nav.Link href="/about">нажми, чтобы прочитать правила</Nav.Link>
                    • Отзывы - <Nav.Link href="/about">нажми, чтобы прочитать отзывы</Nav.Link>
                    • Примеры работ - <Nav.Link href="/blog">нажми, чтобы просмотреть примеры работ</Nav.Link><br></br>

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
