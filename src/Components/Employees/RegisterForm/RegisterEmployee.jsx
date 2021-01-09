import React, { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { useMutation, useQueryClient } from 'react-query';

import { saveEmployee } from '../../../Services/EmployeeService';

const EmployeeForm = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation(async(employeeData) => {
        const result = await saveEmployee(employeeData);
        return result;
    }, {
        onSuccess: () => queryClient.invalidateQueries('getAllEmployees'),
        onError: (error, variables, context) => {
            console.log(error);
            console.log(variables);
            console.log(context);
        }
    });

    const submitHandler = (event, employee) => {
        event.preventDefault();
        const employeeData = {
            id: employee.id,
            nombre: employee.name,
            startingDate: new Date(),
            position: employee.position,
            dui: employee.dui
        }
        mutation.mutate(employeeData);
    }

    const [employee, setEmployee] = useState({
        id: null,
        name: null,
        day: null,
        month: null,
        year: null,
        position: null,
        dui: null
    })

    return (
        <Form onSubmit={event => submitHandler(event, employee)}>
            <Form.Group controlId="employeeId">
                <Form.Label>Employee Id:</Form.Label>
                <Form.Control type="text" placeholder="EmployeeId" onChange={event => setEmployee({
                    ...employee,
                    id: event.target.value
                })}/>
            </Form.Group>
            <Form.Group controlId="nombre">
                <Form.Label type="text">Employee Name:</Form.Label>
                <Form.Control type="text" placeholder="Name" onChange={event => setEmployee({
                    ...employee,
                    name: event.target.value
                })}/>
            </Form.Group>
            <Form.Group as={Row} controlId="startingDate">
                <Form.Label column>
                    Starting Date:
                </Form.Label>
                <Col>
                    <Form.Control type="text" placeholder="Month" onChange={event => setEmployee({
                        ...employee,
                        month: event.target.value
                    })}/>
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Day" onChange={event => setEmployee({
                        ...employee,
                        day: event.target.value
                    })}/>
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Year" onChange={event => setEmployee({
                        ...employee,
                        year: event.target.value
                    })}/>
                </Col>
            </Form.Group>
            <Form.Group controlId="position">
                <Form.Label type="text">Position:</Form.Label>
                <Form.Control type="text" placeholder="Position" onChange={event => setEmployee({
                    ...employee,
                    position: event.target.value
                })}/>
            </Form.Group>
            <Form.Group controlId="dui">
                <Form.Label type="text">DUI:</Form.Label>
                <Form.Control type="text" placeholder="dui" onChange={event => setEmployee({
                    ...employee,
                    dui: event.target.value
                })}/>
            </Form.Group>
            <Form.Group controlId="dui">
                <Button type="submit">Register</Button>
            </Form.Group>
        </Form>
    );
}

export default EmployeeForm;