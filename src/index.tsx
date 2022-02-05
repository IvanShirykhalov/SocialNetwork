import React from 'react';
import './index.css';
import {state, subscribe} from "./Redux/state";
import ReactDOM from 'react-dom';
import {App} from './App';
import {RootStateType} from "./Redux/state";


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



rerenderEntireTree(state);
subscribe(rerenderEntireTree)
