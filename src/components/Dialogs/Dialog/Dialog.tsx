import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: string
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.dialog}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
    );
};
