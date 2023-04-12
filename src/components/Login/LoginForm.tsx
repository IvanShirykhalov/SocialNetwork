import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

export type LoginFormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} component={Input} name={'login'} validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"password"} placeholder={'password'} component={Input} name={'password'}
                       validate={[requiredField]}/>
            </div>
            <div>
                remember me
                <Field type={'checkbox'} component={Input} name={'rememberMe'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};


export const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)