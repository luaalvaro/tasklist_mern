import React, { useState } from 'react';
import Modal from 'react-modal';

import { Container, HeaderModal } from './styles';
import FormTask from '../FormTask';

export default function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
            <Container>
                <h1>Tasks</h1>
                <button type="button" onClick={() => {setModalIsOpen(true)}}>
                    +
                </button>
            </Container>

            <Modal isOpen={modalIsOpen} onRequestClose={() => {setModalIsOpen(false)}}>
                <HeaderModal>
                    <h1>Nova tarefa</h1>
                    <button onClick={() => {setModalIsOpen(false)}}>X</button>
                </HeaderModal>
                <FormTask />
            </Modal>
        </>
    );
}