import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {MyPostPostType} from "./components/Profile/MyPosts/MyPosts";
import {propsDialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {propsMessageType} from "./components/Dialogs/Message/Message";
import {AddPost, state} from "./Redux/state";

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
    addPost: (message: string) => void
}

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={AddPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
