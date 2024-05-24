import React, { Component } from 'react';
import './Backfon.css';
import { Container } from 'react-bootstrap';

const Backfon = () => (
        <div class="parallax">
            <div className="overlay"></div>
                <Container>
                    <h1>Web Developer Blog</h1>
                    <p>Elit adipisicing proident non id ad. In dolore irure adipisicing Lorem velit ullamco nisi nostrud exercitation. Anim do irure eiusmod dolor laborum commodo minim dolore voluptate cupidatat adipisicing ipsum id ullamco.</p>
                    <div class="mask"></div>
                </Container>
        </div>
)

export default Backfon;
