import React from 'react';
import { useQuery } from 'react-query'
import { Row } from 'react-bootstrap';

import { getAllEmployees } from '../../../Services/EmployeeService';
import Aux from '../../../Hoc/Auxiliary';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import CardDeck from '../../../UI/CardDeck/CardDeckUI';

const EmployeesDashboard = (props) => {
    
    const { isLoading, error, data } = useQuery('getAllEmployees', async () => {
        const data = await getAllEmployees();
        return data.items;
    });
    
    if(isLoading) {
        return <div>Ta cargando</div>
    }

    if(error) {
        return <div>Hubo un error</div>
    }

    const cards = data.map(employeeData => 
        <EmployeeCard 
            key={employeeData.fields.id}
            name={employeeData.fields.nombre}
            position={employeeData.fields.position}
            entryId={employeeData.sys.id}
        />
    );

    let deckArray = []
    const chunkSize = 4;
    for (let index = 0; index < cards.length; index += chunkSize) {
         const chunk = cards.slice(index, index + chunkSize);
         deckArray.push(<CardDeck>{chunk}</CardDeck>)
    }
    
    
    return (
        <Aux>
            {deckArray.map((deck, index) => <Row className="pt-4" key={index}>{deck}</Row>)}
        </Aux>
    );

};

export default EmployeesDashboard;