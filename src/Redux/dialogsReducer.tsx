import {ActionsType, StateType} from "./state";
import {propsMessageType} from "../components/Dialogs/Message/Message";

export const dialogsReducer = (state: StateType, action: ActionsType) => {
    if (action.type === 'NEW-MESSAGE-TEXT') {
        state.dialogsPage.newMessageText = action.newMessageText
    } else if (action.type === 'SEND-MESSAGE') {
        const newMessage: propsMessageType = {
            id: new Date().getTime(),
            message: action.newMessageText
        }
        state.dialogsPage.messages.push(newMessage)
        state.dialogsPage.newMessageText = ''
    }

    return state
}
