import React, {ChangeEvent} from 'react';
import {AddMessageAC, changeNewMessageTextAC} from "../../../redux/dialogsPageReducer";
import {DialogPropsType} from "../DialogItem/DialogItem";
import {MessagePropsType} from "./Message";
import {ActionType, StoreType} from "../../../redux/store";
import {Dialogs} from "../Dialogs";

export type DialogsContainerPropsType = {
/*    dialogsPage: {
        dialogs: DialogPropsType[]
        messages: MessagePropsType[]
        newMessageText: string

    }

    dispatch: (action: ActionType) => void*/
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    const addMessage = () => {
        props.store.dispatch(AddMessageAC())
    }
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(changeNewMessageTextAC(e.currentTarget.value))

    }

    return (
        <Dialogs dialogsPage={props.store.getState().dialogsPage} onChange={onChange} addMessage={addMessage}/>
    );
};
