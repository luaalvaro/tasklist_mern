import styled from 'styled-components';

export const Container = styled.div`
    form {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }

    form label {
        color: gray;
        margin-top: 8px;
    }

    form input, select {
        height: 30px;
    }

    form button {
        margin-top: 25px;
        height: 50px;
        background-color: #40508b;
        border: none;
        color: white;
        border-radius: 5px;
    }

    form button:hover {
        cursor: pointer;
        background-color: #40408b;
    }

`