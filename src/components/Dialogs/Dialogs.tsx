import React, {useRef, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";
import {ActionType, AddMessageAC, changeNewMessageTextAC} from "../../redux/state";


export type DialogsPropsType = {
    dialogsPage: {
        dialogs: DialogPropsType[]
        messages: MessagePropsType[]
        newMessageText: string

    }

    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const newMessageElement = useRef<HTMLTextAreaElement>(null)

    const addMessage = () => {
        if (newMessageElement.current !== null) {
            props.dispatch(AddMessageAC())
        }
    }
    const onChange = () => {
        if (newMessageElement.current !== null) {
            props.dispatch(changeNewMessageTextAC(newMessageElement.current.value))
        }
    }

    const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addMessage()
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)}
                <textarea ref={newMessageElement}
                          onKeyPress={onKeyPress}
                          onChange={onChange}
                          value={props.dialogsPage.newMessageText}

                />
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    );
};
