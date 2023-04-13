import React from 'react';
import {LoginFormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: LoginFormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


export default connect(null, {login})(Login)