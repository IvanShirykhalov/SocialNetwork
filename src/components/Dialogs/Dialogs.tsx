import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type propsMessageType = {
    message: string
}
export type propsDialogItemType = {
    name: string
    id: number
}

export function Dialogs() {

    let dialogs = [
        {id: 1, name: 'Stephen'},
        {id: 2, name: 'Sam'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Johnny'},
        {id: 5, name: 'Dilan'},
        {id: 6, name: 'Erik'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'How are you doing?'},
        {id: 5, message: 'How are you getting on?'},
        {id: 6, message: 'Hey'},
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}
