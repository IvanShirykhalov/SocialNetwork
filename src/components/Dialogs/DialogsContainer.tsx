import React from 'react';
import {AddMessage, changeNewMessageText} from "../../redux/dialogs-reducer";
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
    newMessageText: string
}

type mapStateToProps = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    onChange: (text: string) => void
    addMessage: () => void
}

const mapStateToProps = (state: StoreType): mapStateToProps => {

    return {
        dialogsPage: state.dialogsPage,
    }
}


export type DialogsPropsType = mapStateToProps & mapDispatchToPropsType


// export default withAuthRedirectComponent(compose(connect(mapStateToProps, {
//     changeNewMessageText,
//     AddMessage
// }))(Dialogs))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        changeNewMessageText,
        AddMessage
    }),
    withAuthRedirectComponent
)(Dialogs)