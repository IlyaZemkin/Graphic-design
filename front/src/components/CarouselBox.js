import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import linesImg from '../assets/lines.jpg';
import shtormImg from '../assets/shtorm.jpg';
import { CarouselCaption } from 'react-bootstrap';

export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img 
                    className="d-block, w-100"
                    src={ linesImg }
                    alt="Lines"
                />
                <CarouselCaption>
                    <h3>Lines image</h3>
                    <p>“There are three answers to the design outcome - yes, no and WOW! “Wow” is what we should strive for.”</p>
                </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block, w-100"
                    src={ shtormImg }
                    alt="Shtorm"
                />
                <CarouselCaption>
                    <h3>Shtorm image</h3>
                    <p>“There are three answers to the design outcome - yes, no and WOW! “Wow” is what we should strive for.”</p>
                </CarouselCaption>
            </Carousel.Item>
        </Carousel>
    )
  }
}
