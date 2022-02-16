import {initialStateType, newMessageTextAC, sendMessageAC} from "../../Redux/dialogsReducer";
import {Dispatch} from "redux";
import {StateType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


export type dialogsMapStateToProps = {
    dialogsPage: initialStateType
}
export type dialogsMapDispatchToPropsType = {
    sendMessage: () => void
    newMessageText: (newMessageText: string) => void
}

export type DialogsContainerPropsType = dialogsMapStateToProps & dialogsMapDispatchToPropsType

const mapStateToProps = (state: StateType): dialogsMapStateToProps => {
    return {
        dialogsPage: state.dialogsPage
    }

}
const mapDispatchToProps = (dispatch: Dispatch): dialogsMapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        newMessageText: (newMessage: string) => {
            dispatch(newMessageTextAC(newMessage))
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
