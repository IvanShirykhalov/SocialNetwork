import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type LoginFormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field type={"password"} placeholder={'password'} component={'input'} name={'password'}/>
            </div>
            <div>
                remember me
                <Field type={'checkbox'} component={'input'} name={'rememberMe'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};


export const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)