import React, {KeyboardEvent, ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";
import {ActionType} from "../../redux/store";
import {AddMessageAC, changeNewMessageTextAC} from "../../redux/dialogsPageReducer";


export type DialogsPropsType = {
    dialogsPage: {
        dialogs: DialogPropsType[]
        messages: MessagePropsType[]
        newMessageText: string

    }
    addMessage: () => void
    onChange: (text: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {


    const addMessage = () => props.addMessage()

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.onChange(e.currentTarget.value)

    const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            props.addMessage()
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
                <div>
                    <div><textarea
                        placeholder={`Enter your Message...`}
                        onKeyPress={onKeyPress}
                        onChange={onChange}
                        value={props.dialogsPage.newMessageText}

                    /></div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
