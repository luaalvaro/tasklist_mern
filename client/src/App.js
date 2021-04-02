import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';

import { getTasks } from './actions/tasks'

const App = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    return (
        <>
            <Header />
            <Board />
            <GlobalStyle />
        </>
    )
}

export default App;