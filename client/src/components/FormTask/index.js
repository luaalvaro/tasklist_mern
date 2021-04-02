import React, { useState } from 'react';
import { Container } from  './styles';
import { createTask } from '../../actions/tasks';

import { useDispatch } from 'react-redux'

export default function FormSection() {

    const [taskData, setTaskData] = useState({ title: '', description: '', color: '', columnId: '1'})
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createTask(taskData));

        setInterval(() => {
            window.location.reload();
        }, 500);
    }

    return (
        <Container>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Tarefa</label>
                <input value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}></input>

                <label>Descrição</label>
                <input value={taskData.description} onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}></input>

                <label>Marcador</label>
                <select value={taskData.color} onChange={(e) => setTaskData({ ...taskData, color: e.target.value })}>
                    <option value="">Sem marcador</option>
                    <option value="red">Vermelho</option>
                    <option value="blue">Azul</option>
                    <option value="green">Verde</option>
                    <option value="pink">Rosa</option>
                </select>

                <label>Categoria</label>
                <select value={taskData.columnId} onChange={(e) => setTaskData({ ...taskData, columnId: e.target.value })}>
                    <option value="1">Em aberto</option>
                    <option value="2">Em produção</option>
                    <option value="3">Em revisão</option>
                    <option value="4">Concluído</option>
                </select>

                <button type="submit">SALVAR</button>
            </form>
        </Container>
    )
}