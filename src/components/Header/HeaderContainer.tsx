import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {setAuthUserData} from "../../Redux/authReducer";
import {authAPI} from "../../api/api";


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
        authAPI.getAuth().then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.login)
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

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderContainerComponent);