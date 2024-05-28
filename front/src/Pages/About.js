import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col, Card, CardBody } from 'react-bootstrap';
import Quote from "./images/quote.png";
import Face1 from "./images/face1.jpg";
import Face2 from "./images/face2.jpg";
import Face3 from "./images/face3.jpg";
import './style.css';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defualtActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first" >Правила</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" >Отзывы</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" >Partners</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" >Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth" >Reviews</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                <Card className="m-5" border="succes">
              <Card.Body>
                <h5>Правила «Evry Project» :</h5>
                <p>
                <p>
                  • 1. Спам:<br></br>
                  1.1. Больше 3-х одинаковых сообщений в ряд. (чс).<br></br>
                  1.2. Слишком часто писать по поводу своего заказа, когда он будет готов и т.д. (чс).<br></br>
                  1.3. Отвлекать дизайнера какими-либо способами, когда он работает. (чс).<br></br>
                  1.4. Если дизайнер онлайн, но не отвечает, значит он сейчас занят выполнением чужого заказа. Писать ему в это время тысячу раз не стоит, просто напишите вопрос и спокойно ждите ответа.
                </p>

                <p>
                  • 2. Время работы:<br></br>
                  2.1. Работа выполняется от 24ч до недели в зависимости от очереди.<br></br>
                  2.2. Чтобы Ваш заказ был выполнен быстрее, можно договориться.<br></br>
                  2.3. В случае, если дизайнер не успеет выполнить Вашу работу в указанный срок, Вам будут обязаны сделать скидку 5О% на любой товар.
                </p>

                <p>
                  • 3. Оплата:<br></br>
                  3.1. Любой заказ оплачивается по 1ОО% ПРЕДОПЛАТЕ.<br></br>
                  3.2. Оплатить заказ голдой НЕВОЗМОЖНО.<br></br>
                  3.3. Оплата принимается на Qiwi или Сбер.<br></br>
                  3.4. Возврат денежных средств, после оплаты заказа НЕДЕЙСТВИТЕЛЕН. (возможны исключения)
                </p>

                <p>
                  • 4. Отзыв:<br></br>
                  4.1. После выполнения заказа, Вы можете оставить отзыв о качестве работы. Просьба не оставлять отзывы стикерами или просто в одно слово, т.к VK их в скором времени удаляет. Спасибо за понимание.<br></br>
                  4.2. В отзыве можете написать насколько Вы довольны своим заказом, что Вам понравилось, а что нет. Что нужно улучшить дизайнеру, напишите его ошибки, чтобы в будущем он их впредь не совершал.<br></br>
                  4.3. Также напишите, будете-ли Вы ещё заказывать у Дизайнера что-либо или же нет и почему.
                </p>

                <p>
                  • 5. Обман:<br></br>
                  5.1. Обман в любом виде, будь это шутка, не шутка, Вы в любом случае будете отправлены в ЧС и получите БАН в группе.<br></br>
                  5.2. Интересоваться ценами, задавать любые вопросы по поводу потенциально заказа - разрешено.</p>
                </p>
              </Card.Body>
            </Card>
                </Tab.Pane>
                
                <Tab.Pane eventKey="second">
                  <div className="container">
                    <div className="block">
                      <div className="content">
                        <img className="quote-img" src={ Quote } />
                        <p>Sit cupidatat veniam aute ea adipisicing irure est amet aliquip amet laboris. In eu cupidatat in in sint sit sunt qui ut fugiat.</p>
                        <img className="face" src={ Face1 } />
                        <h3>David Khan</h3>
                      </div>
                    </div>

                    <div className="block">
                      <div className="content">
                        <img className="quote-img" src={ Quote } />
                        <p>Sit cupidatat veniam aute ea adipisicing irure est amet aliquip amet laboris. In eu cupidatat in in sint sit sunt qui ut fugiat.</p>
                        <img className="face" src={ Face2 } />
                        <h3>Maria Alvers</h3>
                      </div>
                    </div>

                    <div className="block">
                      <div className="content">
                        <img className="quote-img" src={ Quote } />
                        <p>Sit cupidatat veniam aute ea adipisicing irure est amet aliquip amet laboris. In eu cupidatat in in sint sit sunt qui ut fugiat.</p>
                        <img className="face" src={ Face3 } />
                        <h3>Mike Philipson</h3>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img className="d-block w-100" src="https://s3-alpha.figma.com/hub/file/1082692825/aebfb082-71e9-4f88-84a2-fca5bc1e0f8e-cover.png" />
                  <p>Partners Partners Partners Partners Partners</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img className="d-block w-100" src="https://s3-alpha.figma.com/hub/file/2845539798/000e9a46-32e6-4993-a8a2-4e78101d55a6-cover.png" />
                  <p>Experience Experience Experience Experience Experience</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img className="d-block w-100" src="https://s3-alpha.figma.com/hub/file/1080424384/f292237b-3b39-4ab7-ab5c-919be7686fcd-cover.png" />
                  <p>Reviews Reviews Reviews Reviews Reviews</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
