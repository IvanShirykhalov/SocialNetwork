import React, {ChangeEvent} from 'react';
import {AddMessageAC, changeNewMessageTextAC} from "../../../redux/dialogsPageReducer";
import {DialogPropsType} from "../DialogItem/DialogItem";
import {MessagePropsType} from "./Message";
import {ActionType} from "../../../redux/store";
import {Dialogs} from "../Dialogs";

export type DialogsPropsType = {
    dialogsPage: {
        dialogs: DialogPropsType[]
        messages: MessagePropsType[]
        newMessageText: string

    }

    dispatch: (action: ActionType) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {

    const addMessage = () => {
        props.dispatch(AddMessageAC())
    }
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageTextAC(e.currentTarget.value))

    }

    return (
        <Dialogs dialogsPage={props.dialogsPage} onChange={onChange} addMessage={addMessage}/>
    );
};
