import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type propsDialogItemType = {
    name: string
    id: string
}
function DialogItem({name, id, ...props}: propsDialogItemType) {
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={`/messages/${id}`}>{name}</NavLink>
        </div>
    )
}

type propsMessageType = {
    message: string
}
function Message ({message, ...props}: propsMessageType){
    return(
        <div className={s.message}>{message}</div>
    )
}

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Stephen'} id={'1'}/>
                <DialogItem name={'Sam'} id={'2'}/>
                <DialogItem name={'Igor'} id={'3'}/>
                <DialogItem name={'Johnny'} id={'4'}/>
                <DialogItem name={'Dilan'} id={'5'}/>
                <DialogItem name={'Erik'} id={'6'}/>

            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Hello'}/>
                <Message message={'How are you?'}/>
                <Message message={'How are you doing?'}/>
                <Message message={'How are you getting on?'}/>
                <Message message={'Hey'}/>
            </div>
        </div>
    )
}
