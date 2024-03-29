import React from 'react';
import s from "../Dialogs.module.css";

export type MessagePropsType = {
    id: string
    message: string

}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};
