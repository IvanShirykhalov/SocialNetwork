import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Button, TextField} from "@mui/material";
import {dialogsPageType} from "../../Redux/dialogsReducer";





export type DialogsPropsType = {
    sendMessage: ()=> void
    newMessageText: (e: ChangeEvent<HTMLTextAreaElement>)=> void
    newMessageValue: string
    dialogsElement: any
    messagesElement: any
    /*dialogsPage: ?*/


}

export function Dialogs(props: DialogsPropsType) {

/*    const dialogsElement = props.dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = props.dialogsState.messages.map(m => <Message message={m.message} id={m.id}/>)

    const newMessageValue = props.dialogsState.newMessageText


    const sendMessage = () => {
        props.dispatch(sendMessageAC(props.newTextMessage))
    }

    const newMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newMessageTextAC(e.currentTarget.value))
    }*/

    /*const state = props.dialogsPage*/

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {props.dialogsElement}
                </div>
                <div className={s.messages}>
                    <div> {props.messagesElement}</div>
                    {/*<div> {state.messages}</div>*/}
                </div>
            </div>
            <div><TextField value={props.newMessageValue}
                            onChange={props.newMessageText}
                            placeholder={'Enter your message...'}/></div>
            <div>
                <Button onClick={props.sendMessage}>Send</Button>
            </div>
        </div>
    )
}
