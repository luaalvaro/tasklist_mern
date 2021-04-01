import React from 'react';

import { Container } from './styles'

export default function Header() {
    return (
        <>
            <Container>
                <h1>Tasks</h1>
                <button type="button">
                    +
                </button>
            </Container>
        </>
    );
}