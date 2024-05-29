import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col, Card, CardBody } from 'react-bootstrap';
import Quote from "./images/quote.png";
import Face1 from "./images/face1.jpg";
import Face2 from "./images/face2.jpg";
import Face3 from "./images/face3.jpg";
import Face4 from "./images/face4.jpg";
import Face5 from "./images/face5.jpg";
import Face6 from "./images/face6.jpg";
import Face7 from "./images/face7.jpg";
import Face8 from "./images/face8.jpg";
import Fon1 from "./images/fon1.png";
import Fon2 from "./images/fon2.png";
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
                  <Nav.Link eventKey="third" >Ведущие агентства</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" >Опыт</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                <Card className="m-5" border="succes">
              <Card.Body>
                <h5>Правила «Evry Project» при заказе :</h5>
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
                
                <Tab.Pane className="mt-5" eventKey="second">
                  <div className="overlay">
                    <div className="block">
                      <div className="content">
                        <img className="quote-img" src={ Quote } />
                        <p>Это больше чем качество! Безумно стильно делает, ничего лишнего. Всё как надо и главное, работу выполнил быстро</p>
                        <img className="face" src={ Face1 } />
                        <h3>Сергей Кипов</h3>
                      </div>
                    </div>

                    <div className="block">
                      <div className="content">
                        <img className="quote-img" src={ Quote } />
                        <p>Достаточно быстро качественно выполнил работу, заказываю уже в третий раз. Цена однако иногда достаточно высока. Но работа сделана качественно.</p>
                        <img className="face" src={ Face2 } />
                        <h3>Andrea Laxuse</h3>
                      </div>
                    </div>

                    <div className="block">
                      <div className="content">
                        <img className="quote-img" src={ Quote } />
                        <p>Сделал заказ, в точности как я и описал/представлял итоговый результат, подстроился под мои рекомендации, вообщем крутой чел. СОВЕТУЮ✊</p>
                        <img className="face" src={ Face3 } />
                        <h3>Иван Тсемка</h3>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="mt-5" eventKey="second">
                  <div className="overlay">
                    <div className="block">
                      <div className="content">
                        <img className="quote-img" src={ Quote } />
                        <p>Самый топовый дизайнер - не кидок , всем советую , делает очееень годные работы 🤗</p>
                        <img className="face" src={ Face4 } />
                        <h3>Богдан Солдатов</h3>
                      </div>
                    </div>

                    <div className="block">
                      <div className="content">
                        <img className="quote-img" src={ Quote } />
                        <p>Заказал оформление на ютуб, сделал заказ очень классно и самое главное это за хорошую цену) Советую всем кто хочет заказывать оформление!</p>
                        <img className="face" src={ Face3 } />
                        <h3>User Name</h3>
                      </div>
                    </div>

                    <div className="block">
                      <div className="content">
                        <img className="quote-img" src={ Quote } />
                        <p>Гениальный дизайнер, делает всё в сроки, нет проблем, за него ручаюсь, если что - пишите, лучший! 👑</p>
                        <img className="face" src={ Face5 } />
                        <h3>Максимильян Ветродуйкин </h3>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="mt-5" eventKey="second">
                  <div className="overlay">
                    <div className="block">
                      <div className="content">
                        <img className="quote-img" src={ Quote } />
                        <p>Сделал шикарную оформу на YT 🤩 Всем советую у него заказывать! Качественно и дёшево 😋</p>
                        <img className="face" src={ Face6 } />
                        <h3>Kirill Smirnov</h3>
                      </div>
                    </div>

                    <div className="block">
                      <div className="content">
                        <img className="quote-img" src={ Quote } />
                        <p>Все очень круто, реально качественно, и не скажу что это дорого, за такую цену это дешево, так что заказывайте пока не поздно:)</p>
                        <img className="face" src={ Face7 } />
                        <h3>Danil Tsarev</h3>
                      </div>
                    </div>

                    <div className="block">
                      <div className="content">
                        <img className="quote-img" src={ Quote } />
                        <p>Сделал красивую оформу для клана, все на высшем уровне, надежно и качественно, можете заказывать оформы/логотипы и все остальное у него,советую</p>
                        <img className="face" src={ Face8 } />
                        <h3>Артем Юрлагин</h3>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img className="d-block w-100" src={ Fon1 } />
                  <p>Top Graphic Design Agencies From Around the World Top Graphic Design Agencies From Around the World Top Graphic</p>
                  <Card className="m-4" border="warning">
              <Card.Body>
                <h5>Ведущие агентства графического дизайна со всего мира :</h5><br></br>
                <p>
                <p>
                  1. Duck.Design<br></br>
                  2. Sociallyin<br></br>
                  3. Clay<br></br>
                  4. Neuron<br></br>
                  5. Clever Code Lab<br></br>
                  6. Pentagram<br></br>
                  7. Xhilarate<br></br>
                  8. Sagmeister & Walsh<br></br>
                  9. Captiva Marketing<br></br>
                  10. Starfish<br></br>
                  11. Cleveland Design<br></br>
                  12. Digital Silk<br></br>
                  13. The Bureau of Small Projects<br></br>
                  14. Landor<br></br>
                  15. The Yard Creative
                </p>
                </p>
              </Card.Body>
            </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                <img className="d-block w-100" src={ Fon2 } />
                  <p>experience experience experience experience experience experience experience experience experience experience expe</p>
                  <Card className="m-4" border="primary">
              <Card.Body>
                <h5>Графический дизайн (иногда известный как коммуникационный дизайн) — это работа с изображениями и текстом.<br></br>Для работы в этой сфере необходимы следующие навыки :</h5><br></br>
                <p>
                <p>
                  1. Коммуникация: способность передавать идеи через текст и изображения.<br></br><br></br>
                  2 Творчество: способность креативно выражать идеи через текст и изображения, а также генерировать решения для клиентов.<br></br><br></br>
                  3. Технологии: владение различными формами технологий, такими как программное обеспечение для дизайна (например, Quark, InDesign, Adobe), а также знание языков программирования (включая HTML и CSS) и платформ для управления контентом (например, WordPress).<br></br><br></br>
                  4. Управление временем: способность управлять несколькими проектами одновременно, выполнять задания в течение длительного времени и соблюдать установленные сроки.<br></br><br></br>
                  5. Типографика: знание шрифтов, знание правил их использования, а также знание ведущих, кернинга и отслеживания.
                </p>
                </p>
              </Card.Body>
            </Card>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
