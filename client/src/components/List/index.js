import React from 'react';

import Card from '../Card'
import { Container } from './styles'

export default function List(props) {
    return (
        <>
            <Container done={props.done}>
                <header>
                    <h2>{props.title}</h2>
                </header>

                <ul>
                    <Card/>
                </ul>
            </Container>
        </>
    );
}