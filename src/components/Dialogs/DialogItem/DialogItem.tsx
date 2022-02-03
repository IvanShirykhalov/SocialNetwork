import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type propsDialogItemType = {
    name: string
    id: number
}

export function DialogItem({name, id, ...props}: propsDialogItemType) {
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={`/messages/${id}`}>{name}</NavLink>
        </div>
    )
}

