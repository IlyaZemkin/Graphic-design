import React, { Component } from 'react';
import backfon from './backfon.png';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`
    .parallax {
        background: url(${backfon}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 300px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Backfon = () => (
    <Styles>
        <div className="parallax">
        <div className="overlay"></div>
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Evry Project</h1>
            <p>Привет, меня зовут Илья Неланов! Разрабатываю уникальный визуал. Дизайню ВК и превьюшки на ютуб каналы</p>
        </Container>
        </div>
    </Styles>
)

export default Backfon;
