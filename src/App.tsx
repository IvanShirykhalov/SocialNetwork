import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {MyPostPropsType} from "./components/Profile/MyPosts/MyPosts";
import {DialogPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";


type AppPropsType = {
    dialogs: DialogPropsType[]
    message: MessagePropsType[]
    postData: PostPropsType[]
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route render={() => <Profile posts={props.postData}/>} path={'/profile'}/>
                    <Route render={() => <Dialogs messages={props.message} dialogs={props.dialogs}/>}
                           path={'/dialogs'}/>
                    <Route render={() => <Music/>} path={'/music'}/>
                    <Route render={() => <News/>} path={'/news'}/>
                </div>

                {/*<Footer/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
