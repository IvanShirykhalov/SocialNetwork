import React from 'react';
import {LoginReduxForm} from "./LoginForm";

export const Login = () => {

    const onSubmit = (formData: any) => {

    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
