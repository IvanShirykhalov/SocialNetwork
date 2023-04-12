import React from "react";
import s from './FormsControls.module.css'

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    const showError = meta.touched && meta.error
    return (
        <div className={`${s.formControl} ${showError ? s.error : ''}`}>
            <div>
                <textarea {...input} {...restProps}/>
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}