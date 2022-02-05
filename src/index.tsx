import React from 'react';
import './index.css';
import {store} from "./Redux/state";
import ReactDOM from 'react-dom';
import {App} from './App';


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree();
store.subscribe(rerenderEntireTree)
