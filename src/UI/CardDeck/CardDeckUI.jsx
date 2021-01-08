import React from 'react';
import { CardDeck, Col } from 'react-bootstrap';

const CardDeckUI = (props) => (
    <Col>
        <CardDeck>
            {props.children}
        </CardDeck>
    </Col>
);

export default CardDeckUI;