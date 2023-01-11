import {ActionType} from "./store";
import {DialogPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";

type DialogsPageType = {
    dialogs: DialogPropsType[]
    messages: MessagePropsType[]
    newMessageText: string
}

const initialState: DialogsPageType = {
    dialogs: [
        {id: '1', name: 'Oleg'},
        {id: '2', name: 'Vladimir'},
        {id: '3', name: 'Petr'},
        {id: '4', name: 'Fedor'},
        {id: '5', name: 'Alexander'},
    ],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Hello'},

    ],
    newMessageText: ''
}

export const dialogsPageReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            state.messages.push({
                id: '6',
                message: state.newMessageText
            })
            state.newMessageText = ''

            break;
        case "CHANGE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessageText
            break;
        default:
            return state
    }
}

export const AddMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
export const changeNewMessageTextAC = (newMessageText: string) => ({
    type: 'CHANGE-NEW-MESSAGE-TEXT',
    newMessageText
} as const)