import React, { Component } from 'react';
import { 
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button
} from "react-bootstrap";
import logo from './evrylogo.png';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Contacts from '../Pages/Contacts.js';
import Blog from '../Pages/Blog.js';

const curPath = window.location;

console.log(curPath)

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/" >
              <img
                src={logo}
                height="30"
                width="45"
                className="d-inline-block align-top"
                alt="Logo"
              /> Evry Project
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto">
                <Nav.Link href="/" > Home </Nav.Link>
                <Nav.Link href="/about" > About us </Nav.Link>
                <Nav.Link href="/contacts" > Contacts </Nav.Link>
                <Nav.Link href="/blog" > Blog </Nav.Link>
              </Nav>
              <Form inline className="ms-auto">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/blog" component={Blog} />
          </Routes>
        </Router>

        {curPath.pathname === '/' && <Home></Home>}
        {curPath.pathname === '/about' && <About></About>}
        {curPath.pathname === '/contacts' && <Contacts></Contacts>}
        {curPath.pathname === '/blog' && <Blog></Blog>}
      </>
    );
  }
}