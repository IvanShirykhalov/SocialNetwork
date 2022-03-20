import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {setAuthUserDataAC} from "../../Redux/authReducer";


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
    setAuthUserData: (data: AuthDataPropsType) => void
}

class HeaderContainerComponent extends React.Component<any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true})
            .then(response => {
                    if (response.data.resultCode === 0) {
                        this.props.setAuthUserData(response.data.data.login)
                    }

                }
            )


    }

    render() {
        return (
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

export const HeaderContainer = connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainerComponent);