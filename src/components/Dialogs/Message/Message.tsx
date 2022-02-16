import React from "react";
import s from './../Dialogs.module.css'


type propsMessageType = {
    id: number
    message: string
}

export function Message({message, ...props}: propsMessageType) {
    return (
        <div className={s.message}>{message}</div>
    )
}

