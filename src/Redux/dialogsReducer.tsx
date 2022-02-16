export type propsMessageType = {
    id: number
    message: string
}

export type propsDialogItemType = {
    name: string
    id: number
}


export type UpdateNewMessageText = {
    type: 'NEW-MESSAGE-TEXT'
    newMessageText: string
}
export type sendMessage = {
    type: 'SEND-MESSAGE'
}
export type dialogsPageType = {
    dialogs: Array<propsDialogItemType>
    messages: Array<propsMessageType>
    newMessageText: string
}


export type initialStateType = typeof initialStore

const initialStore = {
    dialogs: [
        {id: 1, name: 'Stephen'},
        {id: 2, name: 'Sam'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Johnny'},
        {id: 5, name: 'Dilan'},
        {id: 6, name: 'Erik'},
    ] as Array<propsDialogItemType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'How are you doing?'},
    ] as Array<propsMessageType>,
    newMessageText: ''

}

const dialogsReducer = (state: initialStateType = initialStore, action: sendMessage | UpdateNewMessageText): initialStateType => {
    switch (action.type) {
        case 'NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.newMessageText}
        case 'SEND-MESSAGE': {
            const message = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: new Date().getTime(), message}]
            }
        }
        default:
            return state
    }

}

export const newMessageTextAC = (newMessageText: string): UpdateNewMessageText => {
    return {
        type: "NEW-MESSAGE-TEXT",
        newMessageText: newMessageText
    }
}
export const sendMessageAC = (): sendMessage => {
    return {
        type: "SEND-MESSAGE"
    }
}


export default dialogsReducer