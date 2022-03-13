import {initialStateType, newMessageText, sendMessage,} from "../../Redux/dialogsReducer";
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

export const DialogsContainer = connect(mapStateToProps, {sendMessage, newMessageText})(Dialogs);
