import React from 'react';
import {LoginFormValuesType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../redux/redux-store";


type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
    captcha: string | null
}

const Login = (props: mapStateToProps & MapDispatchPropsType) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

type mapStateToProps = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const mapStateToProps = (state: StoreType): mapStateToProps => ({
    //@ts-ignore
    isAuth: state.auth.isAuth,
    //@ts-ignore
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login})(Login)