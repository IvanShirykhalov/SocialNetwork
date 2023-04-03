import {Redirect, withRouter} from "react-router-dom";
import React, {ComponentType} from "react";
import {StoreType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}


const MapStateToPropsForRedirect = (state: StoreType): MapStateToPropsForRedirectType => ({
// @ts-ignore
    isAuth: state.auth.isAuth
})

export function withAuthRedirectComponent<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsForRedirectType) => {

        let {isAuth, ...restAuth} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restAuth as T}/>
    }

    // @ts-ignore
    return connect(MapStateToPropsForRedirect)(withRouter(RedirectComponent))
}