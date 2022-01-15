import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type propsMessageType = {
    id: number
    message: string
}
export type propsDialogItemType = {
    name: string
    id: number
}
export type DialogsPropsType = {
    dialogs: Array<propsDialogItemType>
    messages: Array<propsMessageType>
}

export function Dialogs(props: DialogsPropsType) {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message} id={m.id}/>)}
            </div>
        </div>
    )
}
