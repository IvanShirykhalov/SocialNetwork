import React from 'react';
import {AddMessageAC, changeNewMessageTextAC} from "../../redux/dialogsPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreType} from "../../redux/redux-store";
import {DialogPropsType} from "./DialogItem/DialogItem";
import {MessagePropsType} from "./Message/Message";

export type DialogsPageType = {
    dialogs: DialogPropsType[]
    messages: MessagePropsType[]
    newMessageText: string
}

type mapStateToProps = {
    dialogsPage: DialogsPageType
}

const mapStateToProps = (state: StoreType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChange: (text: string) => {
            dispatch(changeNewMessageTextAC(text))
        },
        addMessage: () => {
            dispatch(AddMessageAC())
        },


    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)