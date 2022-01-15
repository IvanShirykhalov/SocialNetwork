import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {state} from "./Redux/State";
import reportWebVitals from './reportWebVitals';
import {MyPostPostType} from "./components/Profile/MyPosts/MyPosts";
import {propsDialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {propsMessageType} from "./components/Dialogs/Message/Message";

export type PropsType = {
    state: {
        dialogsPage: {
            dialogs: Array<propsDialogItemType>
            messages: Array<propsMessageType>
        }
        profilePage: {
            posts: Array<MyPostPostType>
        }
    }
}


ReactDOM.render(
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
