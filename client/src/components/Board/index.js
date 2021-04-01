import React from 'react';

import { Container } from './styles'

import List from '../List'

export default function Board() {
    return (
        <>
            <Container>
                <List title="Prioridade" />
                <List title="Em aberto" />
                <List title="Pausado" />
                <List title="Finalizado" done={true}/>
            </Container>
        </>
    );
}