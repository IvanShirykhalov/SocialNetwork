import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {store} from "./redux/redux-store";
import {Provider, StoreContext} from "./redux/StoreContext";
import {StateType, StoreType} from "./redux/store";


const rerenderEntireTree = (/*state: StateType*/) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>

        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(/*store.getState()*/)
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(/*state*/)
})
//store.subscribe(rerenderEntireTree)

