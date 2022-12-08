import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";


export type DialogsPropsType = {
    dialogs: DialogPropsType[]
    messages: MessagePropsType[]
}

export const Dialogs = (props: DialogsPropsType) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message id={m.id} message={m.message}/>)}
            </div>
        </div>
    );
};
