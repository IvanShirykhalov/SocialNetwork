import {ActionsType, dialogsPageType, StateType} from "./state";
import {propsMessageType} from "../components/Dialogs/Message/Message";

export const dialogsReducer = (state: dialogsPageType, action: ActionsType) => {
    if (action.type === 'NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newMessageText
    } else if (action.type === 'SEND-MESSAGE') {
        const newMessage: propsMessageType = {
            id: new Date().getTime(),
            message: action.newMessageText
        }
        state.messages.push(newMessage)
        state.newMessageText = ''
    }

    return state
}
