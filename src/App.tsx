import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {RootStateType} from "./Redux/state";

type AppPropsType = {
    store: RootStateType
}

export function App(props: AppPropsType) {

    const state = props.store.gerStore()

    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <Header/>
                <Navbar/>
                <div className={'appWrapperContent'}>
                    <Routes>
                        <Route path="/messages" element={<Dialogs dialogsState={state.dialogsPage}/>}/>
                        <Route path="/profile" element={<Profile profileState={state.profilePage}
                                                                 newTextPost={state.profilePage.newTextPost}
                                                                 dispatch={props.store.dispatch.bind(props.store)}
                                                                 />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

