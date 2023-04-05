import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handelSubmit}>
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


export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)