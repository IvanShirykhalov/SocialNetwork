import React from "react";
import s from './../Dialogs.module.css'
import {propsMessageType} from "../Dialogs";



export function Message({message, ...props}: propsMessageType) {
    return (
        <div className={s.message}>{message}</div>
    )
}

