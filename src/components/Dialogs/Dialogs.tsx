import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type propsDialogItemType = {
    name: string
    id: number
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

function Message({message, ...props}: propsMessageType) {
    return (
        <div className={s.message}>{message}</div>
    )
}

export function Dialogs() {

    let dialogs = [
        {id: 1, name: 'Stephen'},
        {id: 2, name: 'Sam'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Johnny'},
        {id: 5, name: 'Dilan'},
        {id: 6, name: 'Erik'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'How are you doing?'},
        {id: 5, message: 'How are you getting on?'},
        {id: 6, message: 'Hey'},
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>
                <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>
                <DialogItem name={dialogs[5].name} id={dialogs[5].id}/>
                <DialogItem name={dialogs[4].name} id={dialogs[4].id}/>*/}
                {dialogs.map(d=> <DialogItem name={d.name} id={d.id}/>)}

            </div>
            <div className={s.messages}>
{/*                <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>
                <Message message={messages[3].message}/>
                <Message message={messages[4].message}/>
                <Message message={messages[5].message}/>*/}
                {messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}
