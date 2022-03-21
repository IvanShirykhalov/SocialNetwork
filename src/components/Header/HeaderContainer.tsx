import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {setAuthUserData} from "../../Redux/authReducer";


export type AuthDataPropsType = {
    data: {
        isAuth: boolean
        userId: null | number
        email: null | string
        login: null | boolean
    }
}


type AuthContainerPropsType = authMapStateToProps & authMapDispatchToPropsType


type authMapStateToProps = {
    isAuth: boolean
    userId: null | number
    email: null | string
    login: null | boolean
}

type authMapDispatchToPropsType = {
    setAuthUserData: (data: {
        userId: null | number
        email: null | string
        login: null | boolean
        isAuth: boolean
    }) => void
}

class HeaderContainerComponent extends React.Component<AuthContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                'API-KEY': '141aa447-788e-402f-a325-e0cd7679cd7e'
            }
        })
            .then(response => {
                    debugger
                    if (response.data.resultCode === 0) {
                        this.props.setAuthUserData(response.data.data.login)
                    }

                }
            )


    }

    render() {
        return (
            /*<Header login={this.props.login} isAuth={this.props.isAuth}/>*/
            <Header {...this.props}/>
        )

    }
}

const mapStateToProps = (state: StateType): authMapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId,
        email: state.auth.email,
    }

}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderContainerComponent);