import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import s from '../../components/common/FormsControls/FormsControls.module.css'

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} component={Input} name={'email'} validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"password"} placeholder={'password'} component={Input} name={'password'}
                       validate={[requiredField]}/>
            </div>
            <div>
                remember me
                <Field type={'checkbox'} component={Input} name={'rememberMe'}/>
            </div>
            {props.error &&
                <div className={s.formSummeryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};


export const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)