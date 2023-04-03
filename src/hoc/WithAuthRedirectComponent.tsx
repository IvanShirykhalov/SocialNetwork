import {Redirect, withRouter} from "react-router-dom";
import React from "react";
import {StoreType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsForRedirect = {
    isAuth: boolean
}

const MapStateToPropsForRedirect = (state: StoreType): mapStateToPropsForRedirect => ({
    //@ts-ignore
    isAuth: state.auth.isAuth
})

export const withAuthRedirectComponent = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>

            return <Component {...this.props}/>
        }
    }

    return connect(MapStateToPropsForRedirect)(withRouter(RedirectComponent))

}