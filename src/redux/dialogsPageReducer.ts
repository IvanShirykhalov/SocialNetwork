import {ActionType, StateType} from "./state";



export const dialogsPageReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            state.dialogsPage.messages.push({
                id: '6',
                message: state.dialogsPage.newMessageText
            })
            state.dialogsPage.newMessageText = ''

            break;
        case "CHANGE-NEW-MESSAGE-TEXT":
            state.dialogsPage.newMessageText = action.newMessageText
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