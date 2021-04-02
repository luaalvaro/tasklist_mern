import React from 'react';

import { Container } from './styles'

import List from '../List'


export default function Board(props) {

    let data = {
        column1: [],
        column2: [],
        column3: [],
        column4: [],
    }

    props.data.tasks.map(task => {
        if (task.columnId === '1') return data.column1.push(task);
        if (task.columnId === '2') return data.column2.push(task);
        if (task.columnId === '3') return data.column3.push(task);
        if (task.columnId === '4') return data.column4.push(task);

        return task;
    })

    return (
        <>
            <Container>
                <List title="Em aberto" keyValue={props.data.tasks[0].id} data={data.column1} />
                <List title="Em produção" keyValue={props.data.tasks[1].id} data={data.column2} />
                <List title="Em revisão" keyValue={props.data.tasks[2].id} data={data.column3} />
                <List title="Concluído" keyValue={props.data.tasks[3].id} data={data.column4} />
            </Container>
        </>
    );
}