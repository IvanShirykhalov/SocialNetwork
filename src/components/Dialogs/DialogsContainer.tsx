import React from 'react';
import {AddMessageAC, changeNewMessageTextAC} from "../../redux/dialogsPageReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../redux/StoreContext";


export const DialogsContainer = () => {

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
