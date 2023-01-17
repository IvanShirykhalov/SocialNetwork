import {ActionType} from "./store";
import {DialogPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {v1} from "uuid";

type DialogsPageType = {
    dialogs: DialogPropsType[]
    messages: MessagePropsType[]
    newMessageText: string
}

const initialState: DialogsPageType = {
    dialogs: [
        {id: v1(), name: 'Oleg'},
        {id: v1(), name: 'Vladimir'},
        {id: v1(), name: 'Petr'},
        {id: v1(), name: 'Fedor'},
        {id: v1(), name: 'Alexander'},
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hello'},

    ],
    newMessageText: ''
}

export const dialogsPageReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: state.newMessageText}],
                newMessageText: ''
            }

        case "CHANGE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}

export const AddMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
export const changeNewMessageTextAC = (newMessageText: string) => ({
    type: 'CHANGE-NEW-MESSAGE-TEXT',
    newMessageText
} as const)