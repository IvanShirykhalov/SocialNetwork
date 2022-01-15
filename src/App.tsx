import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {propsType} from "./index";



export function App(props: propsType) {

/*    let posts = [
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
    ]*/


    return (
        <BrowserRouter>
        <div className={'appWrapper'}>
            <Header/>
            <Navbar/>
            <div className={'appWrapperContent'}>
                <Routes>
                    <Route path="/messages" element= {<Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
                    <Route path="/profile" element={<Profile posts={props.posts}/>}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}

