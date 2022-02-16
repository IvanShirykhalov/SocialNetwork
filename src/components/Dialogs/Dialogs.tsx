import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Button, TextField} from "@mui/material";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsPageType} from "../../Redux/dialogsReducer";
import {DialogsContainerPropsType} from "./DialogsContainer";





export type DialogsPropsType = {
    sendMessage: ()=> void
    newMessageText: ()=> void
    dialogsPage: dialogsPageType
}

export function Dialogs(props: DialogsContainerPropsType) {

    const dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElement = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)


    const onClickHandler = () => props.sendMessage()

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        props.newMessageText(e.currentTarget.value)
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
            <div><TextField value={props.dialogsPage.newMessageText}
                            onChange={onChangeHandler}
                            placeholder={'Enter your message...'}/></div>
            <div>
                <Button onClick={onClickHandler}>Send</Button>
            </div>
        </div>
    )
}
