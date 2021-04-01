import React from 'react';

import { MdAdd } from 'react-icons/md'
import { Container } from './styles'

export default function Header() {
    return (
        <>
            <Container>
                <h1>Tasks</h1>
                <button type="button">
                    <MdAdd />
                </button>
            </Container>
        </>
    );
}