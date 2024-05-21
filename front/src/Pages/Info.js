import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlock';
import './App.css';
import React, { Component } from "react";
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button,
} from "react-bootstrap";
import logo from "./evrylogo.png";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";

import Home from "../Pages/Home.js";
import Info from "../Pages/Info.js"
import About from "../Pages/About.js";
import Contacts from "../Pages/Contacts.js";
import Blog from "../Pages/Blog.js";

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="45"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />{" "}
                            Evry Project
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/info"> Information </Nav.Link>
                                <Nav.Link href="/about"> About us </Nav.Link>
                                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                                <Nav.Link href="/blog"> Blog </Nav.Link>
                            </Nav>
                            <Form inline className="ms-auto">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info" className="mt-1">Search</Button>
                            </Form>
                            <Nav>
                                <Button variant="primary" className="m-2 ms-5 mt-2">Log in</Button>
                                <Button variant="primary" className="m-2 mt-2">Sign out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/info" element={<Info />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/contacts" element={<Contacts />} />
                        <Route exact path="/blog" element={<Blog />} />
                    </Routes>
                </Router>
            </>
        );
    }
}


function App() {
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}