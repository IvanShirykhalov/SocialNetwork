import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route component={Profile} path={'/profile'}/>
                    <Route component={Dialogs} path={'/dialogs'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={News} path={'/news'}/>
                </div>

                {/*<Footer/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
