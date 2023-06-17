import {v1} from "uuid";

type DialogsPageType = typeof initialState
type ActionType =
    | ReturnType<typeof addMessage>
    | ReturnType<typeof deleteMessage>

const initialState = {
    dialogs: [
        {id: v1(), name: 'Oleg'},
        {id: v1(), name: 'Vladimir'},
        {id: v1(), name: 'Petr'},
        {id: v1(), name: 'Fedor'},
        {id: v1(), name: 'Alexandr'},
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
        case "DELETE-MESSAGE":
            return {
                ...state,
                messages: [...state.messages.filter(m => m.id !== action.id)]
            }
        default:
            return state
    }
}

export const addMessage = (newMessageBody: string) => ({type: 'ADD-MESSAGE', newMessageBody} as const)
export const deleteMessage = (id: string) => ({type: 'DELETE-MESSAGE', id} as const)
