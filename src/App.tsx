import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {DialogPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";
import {ActionType} from "./redux/store";


type AppPropsType = {
    state: {
        dialogsPage: {
            dialogs: DialogPropsType[]
            messages: MessagePropsType[]
            newMessageText: string
        },
        profilePage: {
            posts: PostPropsType[]
            newPostText: string
        }
    }
    dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route render={() => <Profile profilePage={props.state.profilePage}
                                              dispatch={props.dispatch}
                />}
                       path={'/profile'}/>
                <Route render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                              dispatch={props.dispatch}
                />}
                       path={'/dialogs'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <News/>} path={'/news'}/>
            </div>

            {/*<Footer/>*/}
        </div>

    );
}

export default App;
