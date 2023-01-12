import React, {ChangeEvent} from 'react';
import {AddMessageAC, changeNewMessageTextAC} from "../../redux/dialogsPageReducer";
import {DialogPropsType} from "./DialogItem/DialogItem";
import {MessagePropsType} from "./Message/Message";
import {ActionType, StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {store} from "../../redux/redux-store";
import {StoreContext} from "../../redux/StoreContext";

export type DialogsContainerPropsType = {
    /*    dialogsPage: {
            dialogs: DialogPropsType[]
            messages: MessagePropsType[]
            newMessageText: string

        }

        dispatch: (action: ActionType) => void*/
    //store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const addMessage = () => {
                    store.dispatch(AddMessageAC())
                }
                const onChange = (text: string) => {
                    store.dispatch(changeNewMessageTextAC(text))

                }

                return (
                    <Dialogs dialogsPage={store.getState().dialogsPage} onChange={onChange} addMessage={addMessage}/>
                )
            }}
        </StoreContext.Consumer>

    );
};
