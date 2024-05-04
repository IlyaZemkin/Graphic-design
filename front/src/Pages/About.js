import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defualtActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first" >Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" >Services</Nav.Link>
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
                  <img className="d-block w-100" src="https://s3-alpha.figma.com/hub/file/1776081743/2cdf9839-2a80-47f7-81d3-069d04d8ca6e-cover.png" />
                  <p>Design Design Design Design Design</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img className="d-block w-100" src="https://s3-alpha.figma.com/hub/file/1080449610/5442d7d7-4ab7-4e3a-8d62-1b1b0f26a48c-cover.png" />
                  <p>Services Services Services Services Services</p>
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
