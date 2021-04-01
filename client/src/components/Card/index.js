import React from 'react';
import { useDrag } from 'react-dnd';

import { Container, Label } from './styles'

export default function Card() {

    const [{ isDragging }, dragRef] = useDrag({
        type: 'CARD',
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <>
            <Container ref={dragRef} isDragging={isDragging}>
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