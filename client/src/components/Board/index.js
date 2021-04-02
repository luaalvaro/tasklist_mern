import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles'

import List from '../List'


export default function Board(props) {

    let data = {
        column1: [],
        column2: [],
        column3: [],
        column4: [],
    }

    const tasks = useSelector((state) => state.tasks);
    
    try {
        tasks.response.map(task => {
            if (task.columnId === '1') return data.column1.push(task);
            if (task.columnId === '2') return data.column2.push(task);
            if (task.columnId === '3') return data.column3.push(task);
            if (task.columnId === '4') return data.column4.push(task);
        })
    } catch (error) {
        
    }



    return (
        <>
            <Container>
                <List title="Em aberto" data={data.column1} />
                <List title="Em produção" data={data.column2} />
                <List title="Em revisão" data={data.column3} />
                <List title="Concluído" data={data.column4} />
            </Container>
        </>
    );
}