import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import s from '../../components/common/FormsControls/FormsControls.module.css'
import {UserProfileType} from "../../redux/profile-reducer";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField('Email', 'email', [requiredField], Input)}
            {createField('password', 'password', [requiredField], Input, {type: 'password'})}
            {createField('', 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}


            {props.captchaUrl && <img src={`${props.captchaUrl}`} alt="captcha"/>}
            {props.captchaUrl && createField('Symbols from image', 'captcha', [requiredField], Input)}

            {props.error && <div className={s.formSummeryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};


export const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)