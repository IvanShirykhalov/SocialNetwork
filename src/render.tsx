import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, changeNewPostText, StateType} from "./redux/state";
import React from "react";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}