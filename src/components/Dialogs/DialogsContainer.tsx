import React from 'react';
import {AddMessageAC, changeNewMessageTextAC} from "../../redux/dialogs-reducer";
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
    isAuth: boolean | null
}

type mapDispatchToPropsType = {
    onChange: (text: string) => void
    addMessage: () => void
}

const mapStateToProps = (state: StoreType): mapStateToProps => {

    return {
        dialogsPage: state.dialogsPage,
        // @ts-ignore
        isAuth: state.auth.isAuth,


    }
}

export type DialogsPropsType = mapStateToProps & mapDispatchToPropsType

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onChange: (text: string) => dispatch(changeNewMessageTextAC(text)),
        addMessage: () => dispatch(AddMessageAC()),
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)