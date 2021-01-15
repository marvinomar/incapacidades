import React from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmployeeCard = props => (
    <Card>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle>{props.position}</Card.Subtitle>
            <Link to={`/${props.entryId}`} className="btn btn-primary mt-2">Ver Detalles</Link>
        </Card.Body>
    </Card>
);

export default EmployeeCard;
