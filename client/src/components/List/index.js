import React from 'react';

import Card from '../Card';
import { Container } from './styles';

export default function List(props) {

    return (
        <>
            <Container done={props.done}>
                <header>
                    <h2>{props.title}</h2>
                </header>

                <ul>
                    {props.data.map(task => {
                        console.log(task)
                        return <Card keyValue={task.id}  title={task.title} description={task.description} color={task.color} />
                    })}
                </ul>
            </Container>
        </>
    );
}