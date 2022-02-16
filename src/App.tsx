import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Store} from "redux";
import {store, StateType} from "./Redux/redux-store";
import {AddPostActionType, ChangeNewTextActionType} from "./Redux/profileReducer";
import {sendMessage, UpdateNewMessageText} from "./Redux/dialogsReducer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

export type ActionsType = ChangeNewTextActionType | AddPostActionType | UpdateNewMessageText | sendMessage
type AppPropsType = {
    store: Store<StateType, ActionsType>
}

export const App = () => {

    const state = store.getState()

    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <Header/>
                <Navbar/>
                <div className={'appWrapperContent'}>
                    <Routes>
                        <Route path="/messages"
                               element={<DialogsContainer/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

