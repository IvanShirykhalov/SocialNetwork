import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";



export function App() {
    return (
        <BrowserRouter>
        <div className={'appWrapper'}>
            <Header/>
            <Navbar/>
            <div className={'appWrapperContent'}>
                <Routes>
                    <Route path="/messages" element= {<Dialogs/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}

