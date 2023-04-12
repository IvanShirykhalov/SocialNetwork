import {DialogPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {v1} from "uuid";

type DialogsPageType = {
    dialogs: DialogPropsType[]
    messages: MessagePropsType[]
}

type ActionType =
    ReturnType<typeof addMessage>

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
}

export const dialogsReducer = (state = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.newMessageBody}],
            }
        default:
            return state
    }
}

export const addMessage = (newMessageBody: string) => ({type: 'ADD-MESSAGE', newMessageBody} as const)
