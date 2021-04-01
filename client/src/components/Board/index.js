import React from 'react';

import { Container } from './styles'

import List from '../List'

export default function Header() {
    return (
        <>
            <Container>
                <List />
                <List />
                <List />
                <List />
            </Container>
        </>
    );
}