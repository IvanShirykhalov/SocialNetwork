import React, {ChangeEvent} from "react";
import {newMessageTextAC, sendMessageAC} from "../../Redux/dialogsReducer";
import {ActionsType} from "../../App";
import {Store} from "redux";
import {store, StoreType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";
import StateContext from "../../StateContext";


type DialogsContainerPropsType = {
    messageText: string
    store: Store<StoreType, ActionsType>

}

export function DialogsContainer() {


    return (
        <StateContext.Consumer>
            {(state) => {

                const sendMessage = () => {

                    store.dispatch(sendMessageAC(state.dialogsPage.newMessageText))
                }


                const newMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {

                    store.dispatch(newMessageTextAC(e.currentTarget.value))
                }

                return (
                    <Dialogs newMessageValue={state.dialogsPage.newMessageText}
                             sendMessage={sendMessage}
                             newMessageText={newMessageText}
                             dialogsPage={state.dialogsPage}
                    />)
            }
            }

        </StateContext.Consumer>
    )
}
