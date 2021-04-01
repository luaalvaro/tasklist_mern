import React from 'react';

import { Container, Label } from './styles'

export default function Card(props) {

    return (
        <>
            <Container>
                <div id={props.keyValue}>
                    <header>
                        <Label color={props.color} />
                    </header>

                    <span>{props.title}</span>
                    <p>{props.description}</p>
                </div>
            </Container>
        </>
    );
}