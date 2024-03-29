import React from 'react';
import {addMessage} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {DialogPropsType} from "./DialogItem/DialogItem";
import {MessagePropsType} from "./Message/Message";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

export type DialogsPageType = {
    dialogs: DialogPropsType[]
    messages: MessagePropsType[]
}

type mapStateToProps = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    addMessage: (value: string) => void
}

const mapStateToProps = (state: StoreType): mapStateToProps => {

    return {
        dialogsPage: state.dialogsPage,
    }
}


export type DialogsPropsType = mapStateToProps & mapDispatchToPropsType

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}), withAuthRedirectComponent
)(Dialogs)