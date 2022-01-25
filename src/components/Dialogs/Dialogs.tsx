import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {propsDialogItemType, propsMessageType} from "../../Redux/State";


export type DialogsPropsType = {
    dialogsState: {
        dialogs: Array<propsDialogItemType>
        messages: Array<propsMessageType>
    }

}

export function Dialogs(props: DialogsPropsType) {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsState.messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}
