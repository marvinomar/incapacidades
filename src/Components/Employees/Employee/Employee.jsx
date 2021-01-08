import React from 'react';
import { useQuery } from 'react-query';
import { Row, Col } from 'react-bootstrap';

import { getEmployee } from '../../../Services/EmployeeService';
import Aux from '../../../Hoc/Auxiliary';

const Employee = (props) => {
    
    const { isLoading, error, data } = useQuery('getEmployee', async() => {
        const data = await getEmployee(props.match.params.id);
        return data;
    });

    if(isLoading) {
        return <div>Ta cargando</div>
    }

    if(error) {
        return <div>Hubo un error</div>
    }
    
    const { fields } = data;
    const { nombre, dui, position, startingDate, id, medicalLeave } = fields;

    return(
        <Aux>
            <Row>
                <Col>Employee: {nombre}</Col>
                <Col>Id: {id}</Col>
            </Row>
            <Row>
                <Col>
                    Role: {position}
                </Col>
                <Col>
                    Starting date: {startingDate}
                </Col>
                <Col>
                    DUI : {dui}
                </Col>
            </Row>
        </Aux>
    );
};

export default Employee;