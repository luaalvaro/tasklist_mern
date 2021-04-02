import React from 'react';

import Card from '../Card';
import { Container } from './styles';

export default function List(props) {

    const allTasks = props.data.map((task, i) => {
        return <Card
        keyValue={task.id} 
        title={task.title}
        description={task.description}
        color={task.color} />
    })
    
    return (
       <Container>
            <header> <h2>{props.title}</h2> </header>
            <ul>{allTasks}</ul>   
        </Container>
    );
}