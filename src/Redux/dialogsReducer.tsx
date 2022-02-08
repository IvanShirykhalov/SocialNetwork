import {propsMessageType} from "../components/Dialogs/Message/Message";
import {propsDialogItemType} from "../components/Dialogs/DialogItem/DialogItem";


export type UpdateNewMessageText = {
    type: 'NEW-MESSAGE-TEXT'
    newMessageText: string
}
export type sendMessage = {
    type: 'SEND-MESSAGE'
    newMessageText: string
}
export type dialogsPageType = {
    dialogs: Array<propsDialogItemType>
    messages: Array<propsMessageType>
    newMessageText: string
}

const initialStore: dialogsPageType =  {
    dialogs: [
        {id: 1, name: 'Stephen'},
        {id: 2, name: 'Sam'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Johnny'},
        {id: 5, name: 'Dilan'},
        {id: 6, name: 'Erik'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'How are you doing?'},
    ],
    newMessageText: ''

}

const dialogsReducer = (state = initialStore, action:UpdateNewMessageText | sendMessage) => {
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