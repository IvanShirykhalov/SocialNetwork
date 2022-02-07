import {ActionsType, dialogsPageType, sendMessage, UpdateNewMessageText} from "./state";
import {propsMessageType} from "../components/Dialogs/Message/Message";

const dialogsReducer = (state: dialogsPageType, action: ActionsType) => {
    switch (action.type) {
        case 'NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText
            return state;
        case 'SEND-MESSAGE':
            const newMessage: propsMessageType = {
                id: new Date().getTime(),
                message: action.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        default:
            return state
    }

    return state
}

export const newMessageTextAC = (newMessageText: string): UpdateNewMessageText => {
    return {
        type: "NEW-MESSAGE-TEXT",
        newMessageText: newMessageText
    }
}
export const sendMessageAC = (newMessageText: string): sendMessage => {
    return {
        type: "SEND-MESSAGE",
        newMessageText: newMessageText
    }
}


export default dialogsReducer