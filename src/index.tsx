import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {ActionsType, App} from './App';
import {Store} from "redux";
import {store, StateType} from "./Redux/redux-store";
import {Provider} from "react-redux";



export const rerenderEntireTree = (store: Store<StateType, ActionsType>) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        , document.getElementById('root')
    );
}


rerenderEntireTree(store);
store.subscribe(() => rerenderEntireTree(store))
