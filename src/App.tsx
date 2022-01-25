import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PropsType} from "./Redux/State";



export function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <Header/>
                <Navbar/>
                <div className={'appWrapperContent'}>
                    <Routes>
                        <Route path="/messages" element={<Dialogs dialogsState={props.state.dialogsPage}/>}/>
                        <Route path="/profile" element={<Profile profileState={props.state.profilePage}
                                                                 addPost={props.addPost}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

