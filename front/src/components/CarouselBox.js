import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import linesImg from '../assets/shapka.png';
import shtormImg from '../assets/twoshapka.png';
import bombaImg from './bomba.png';

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
                    <p>Привет, меня зовут Илья Неланов! Разрабатываю уникальный визуал. Дизайню ВК и превьюшки на ютуб каналы.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={ shtormImg }
                    alt="Shtorm"
                />
                <Carousel.Caption>
                    <h3>Graphic Design</h3>
                    <p>Привет, меня зовут Илья Неланов! Разрабатываю уникальный визуал. Дизайню ВК и превьюшки на ютуб каналы.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={ bombaImg }
                    alt="Bomba"
                />
                <Carousel.Caption>
                    <h3>Graphic Design</h3>
                    <p>Привет, меня зовут Илья Неланов! Разрабатываю уникальный визуал. Дизайню ВК и превьюшки на ютуб каналы.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
  }
}
