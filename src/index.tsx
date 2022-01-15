import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {propsDialogItemType, propsMessageType} from "./components/Dialogs/Dialogs";
import {MyPostPostType} from "./components/Profile/MyPosts/MyPosts";

export type propsType = {
    dialogs: Array<propsDialogItemType>
    messages: Array<propsMessageType>
    posts: Array<MyPostPostType>
}

let posts = [
    {id: 1, message: 'Hi', likeCount: 12},
    {id: 1, message: 'Hello', likeCount: 6},
    {id: 1, message: 'guten Tag', likeCount: 0},
]
let dialogs = [
    {id: 1, name: 'Stephen'},
    {id: 2, name: 'Sam'},
    {id: 3, name: 'Igor'},
    {id: 4, name: 'Johnny'},
    {id: 5, name: 'Dilan'},
    {id: 6, name: 'Erik'},
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'How are you doing?'},
    {id: 5, message: 'How are you getting on?'},
    {id: 6, message: 'Hey'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages}  dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
