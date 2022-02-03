import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {AddPost, state} from "./Redux/state";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={AddPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

