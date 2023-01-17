import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


function App() {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route render={() => <Profile
                    //store={props.store}

                    //profilePage={props.store.getState().profilePage}
                    //dispatch={props.store.dispatch.bind(props.store)}
                />}
                       path={'/profile'}/>
                <Route render={() => <DialogsContainer
                    //store={props.store}

                    //dialogsPage={props.store.getState().dialogsPage}
                    //dispatch={props.store.dispatch.bind(props.store)}
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
