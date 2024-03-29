import React from "react";
import s from './FormsControls.module.css'
import {Field} from "redux-form";


const FromControl = ({input, meta, element, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
            <div>{props.children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FromControl {...props}><textarea {...input} {...restProps}/></FromControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FromControl {...props}><input {...input} {...restProps}/></FromControl>
}

export const createField = (placeholder?: string | undefined, name?: string, validators?: any[], component?: any, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)


export type GetStringKeys<T> = Extract<keyof T, string>