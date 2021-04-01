import styled from 'styled-components';

export const Container = styled.div`
    height: 75px;
    padding: 0 30px;
    background-color: #40508b;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        width: 42px;
        height: 42px;
        border-radius: 10px;
        background-color: #fff;
        border: 0;
        cursor: pointer;
    }

    button:hover {
        background-color: #f8f8f8;
    }
`