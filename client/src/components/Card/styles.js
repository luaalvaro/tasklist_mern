import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.4);
    cursor: grab;

    header {
        position: absolute;
        top: -20px;
        left: 15px;
    }

    span {
        font-weight: bold;
    }

    p {
        font-weight: 300;
        margin-top: 3px;
    }
    
`

export const Label = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 3px;
    display: inline-block;
    background: ${props => props.color}
`