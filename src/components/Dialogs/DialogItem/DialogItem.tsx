import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
    name: string
    id: string
}

export const DialogItem = (props: DialogPropsType) => {
    return (
        <div className={s.dialog}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
    );
};
