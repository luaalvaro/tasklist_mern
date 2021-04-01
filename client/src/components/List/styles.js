import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;

    & + div {
        border-left: 1px solid #e1e1e1;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;
        margin-bottom: 25px;
        
        h2 {
            font-size: 16px;
            padding 0 10px;
        }

        button {
            width: 42px;
            height: 42px;
            border-radius: 10px;
            background-color: #40508b;
            border: 0;
            cursor: pointer;
        }

        ul {
            margin-top: 30px;
        }
    }
`;