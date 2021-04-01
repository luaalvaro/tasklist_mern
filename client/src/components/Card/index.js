import React from 'react';

import { Container, Label } from './styles'

export default function Header() {
    return (
        <>
            <Container>
                <div>
                    <header>
                        <Label color="red" />
                    </header>

                    <span>Title do card</span>
                    <p>Description do card</p>
                </div>
            </Container>
        </>
    );
}