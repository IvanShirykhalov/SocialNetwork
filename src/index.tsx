import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {App} from './App';

import {Store} from "redux";
import {store, StoreType} from "./Redux/redux-store";


export const rerenderEntireTree = (store: Store<StoreType, any>) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store);
store.subscribe(() =>rerenderEntireTree(store))
