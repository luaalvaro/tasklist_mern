import React from 'react';
import { initialData } from './services/Tasks';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';

const App = () => {

    let data = initialData;
    
    return (
        <>
            <Header />
            <Board data={data}/>
            <GlobalStyle />
        </>
    )
}

export default App;