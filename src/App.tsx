import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, RouteComponentProps, withRouter} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {StoreType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader";


type MapStateToProps = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type PropsType = RouteComponentProps & mapDispatchToPropsType & MapStateToProps

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


class App extends React.Component<PropsType, StoreType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Suspense fallback={<Preloader/>}>
                            <Route render={() => <ProfileContainer/>} path={'/profile/:userId?'}/>
                            <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                            <Route render={() => <UsersContainer/>} path={'/users'}/>
                            <Route render={() => <Login/>} path={'/login'}/>
                            <Route render={() => <Music/>} path={'/music'}/>
                            <Route render={() => <News/>} path={'/news'}/>
                        </Suspense>
                    </div>
                </div>

            );
        }
    }
}

const MapStateToProps = (state: StoreType) => ({
    initialized: state.app.initialized,
})

export default connect(MapStateToProps, {initializeApp})(withRouter(App))
