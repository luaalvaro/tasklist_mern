import React from 'react';
import { Form } from  './styles';

export default function FormSection() {

    return (
        <Form>
            <form autoComplete="off">
                <label>Tarefa</label>
                <input></input>

                <label>Descrição</label>
                <input></input>

                <label>Categoria</label>
                <select>
                    <option>Em aberto</option>
                    <option>Em produção</option>
                    <option>Em revisão</option>
                    <option>Concluído</option>
                </select>

                <button>SALVAR</button>
            </form>
        </Form>
    )
}