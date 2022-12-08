import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";


const dialogs: DialogPropsType[]  = [
    {id: '1', name: 'Oleg'},
    {id: '2', name: 'Vladimir'},
    {id: '3', name: 'Petr'},
    {id: '4', name: 'Fedor'},
    {id: '5', name: 'Alexander'},
]

const messages: MessagePropsType[] = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'Hello'},
    {id: '3', message: 'Whats up'},
    {id: '4', message: 'Guten tag'},
    {id: '5', message: 'Aloha'},
]

const posts: PostPropsType[] = [
    {id: '1', message: 'Hi, how are you?', likeCount: 2},
    {id: '2', message: 'Hi', likeCount: 10},
    {id: '3', message: 'How are you?', likeCount: 4},
]


ReactDOM.render(
    <App message={messages} dialogs={dialogs} postData={posts}/>,
    document.getElementById('root')
);