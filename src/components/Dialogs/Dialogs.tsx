import React, {useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";


export type DialogsPropsType = {
    dialogsPage: {
        dialogs: DialogPropsType[]
        messages: MessagePropsType[]
    }
}

export const Dialogs = (props: DialogsPropsType) => {

    const newMessageElement = useRef<HTMLTextAreaElement>(null)

    const addMessage = () => {
        if (newMessageElement.current !== null) {
            alert(newMessageElement.current.value)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)}
                <textarea ref={newMessageElement}> </textarea>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    );
};
