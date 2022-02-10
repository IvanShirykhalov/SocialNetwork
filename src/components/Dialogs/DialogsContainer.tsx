import React, {ChangeEvent} from "react";
import {newMessageTextAC, sendMessageAC} from "../../Redux/dialogsReducer";
import {ActionsType} from "../../App";
import {Store} from "redux";
import {StoreType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";


type DialogsContainerPropsType = {
    messageText: string
    store: Store<StoreType, ActionsType>

}

export function DialogsContainer(props: DialogsContainerPropsType) {

    const state = props.store.getState().dialogsPage

    /*const dialogsElement = props.dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)*/
    /*const messagesElement = props.dialogsState.messages.map(m => <Message message={m.message} id={m.id}/>)*/
   /* const dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = state.messages.map(m => <Message id={m.id} message={m.message}/>)*/


    /*const newMessageValue = props.dialogsState.newMessageText*/
    const newMessageValue = state.newMessageText


    const sendMessage = () => {
        /*props.dispatch(sendMessageAC(props.newTextMessage))*/
        props.store.dispatch(sendMessageAC(props.messageText))
    }


    const newMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /*props.dispatch(newMessageTextAC(e.currentTarget.value))*/
        props.store.dispatch(newMessageTextAC(e.currentTarget.value))
    }

    return (
        /*        <div>
                    <div className={s.dialogs}>
                        <div className={s.dialogsItems}>
                            {dialogsElement}
                        </div>
                        <div className={s.messages}>
                            <div> {messagesElement}</div>
                        </div>
                    </div>
                    <div><TextField value={newMessageValue}
                                    onChange={newMessageText}
                                    placeholder={'Enter your message...'}/></div>
                    <div>
                        <Button onClick={sendMessage}>Send</Button>
                    </div>
                </div>*/
        <Dialogs newMessageValue={newMessageValue}
                 sendMessage={sendMessage}
                 newMessageText={newMessageText}
                 dialogsPage={state}
            /*dialogsElement={dialogsElement}
            messagesElement={messagesElement}*/

        />
    )
}
