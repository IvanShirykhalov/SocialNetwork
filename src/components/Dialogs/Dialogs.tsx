import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem, propsDialogItemType} from "./DialogItem/DialogItem";
import {Message, propsMessageType} from "./Message/Message";
import {ActionsType, newMessageTextAC, sendMessageAC} from "../../Redux/state";
import {Button, TextField} from "@mui/material";


export type DialogsPropsType = {
    dialogsState: {
        dialogs: Array<propsDialogItemType>
        messages: Array<propsMessageType>
        newMessageText: string
    }
    dispatch: (action: ActionsType) => void
    newTextMessage: string

}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElement = props.dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = props.dialogsState.messages.map(m => <Message message={m.message} id={m.id}/>)

    const newMessageValue = props.dialogsState.newMessageText


    const sendMessage = () => {
        props.dispatch(sendMessageAC(props.newTextMessage))
    }

    const newMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newMessageTextAC(e.currentTarget.value))
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={s.messages}>
                    <div> {messagesElement}</div>
                </div>
            </div>
            <div><TextField value={newMessageValue}
                            onChange={newMessageText}
                            placeholder={'Enter your message...'}/></div>
            <div>
                <Button onClick={sendMessage}>Send</Button>
            </div>
        </div>
    )
}
