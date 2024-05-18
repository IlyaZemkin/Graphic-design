import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import linesImg from '../assets/shapka.png';
import shtormImg from '../assets/twoshapka.png';

export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={ linesImg }
                    alt="Lines"
                />
                <Carousel.Caption>
                    <h3>Graphic Design</h3>
                    <p>There are three answers to the design outcome - yes, no and WOW! “Wow” is what we should strive for.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={ shtormImg }
                    alt="Shtorm"
                />
                <div text="primary">
                <Carousel.Caption>
                    <h3>Graphic Design</h3>
                    <p>There are three answers to the design outcome - yes, no and WOW! “Wow” is what we should strive for.</p>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    )
  }
}
