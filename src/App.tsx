import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    return (

        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route render={() => <ProfileContainer/>} path={'/profile/:userId?'}/>
                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                <Route render={() => <UsersContainer/>} path={'/users'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <News/>} path={'/news'}/>
            </div>

            {/*<Footer/>*/}
        </div>

    );
}

export default App;
