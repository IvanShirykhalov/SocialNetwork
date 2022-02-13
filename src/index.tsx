import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {ActionsType, App} from './App';
import {Store} from "redux";
import {store, StoreType} from "./Redux/redux-store";
import {Provider} from "./StateContext";


export const rerenderEntireTree = (store: Store<StoreType, ActionsType>) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        , document.getElementById('root')
    );
}


rerenderEntireTree(store);
store.subscribe(() => rerenderEntireTree(store))
