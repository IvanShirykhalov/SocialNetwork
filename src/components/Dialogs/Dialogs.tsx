import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    const dialogsData = [
        {id: '1', name: 'Oleg'},
        {id: '2', name: 'Vladimir'},
        {id: '3', name: 'Petr'},
        {id: '4', name: 'Fedor'},
        {id: '5', name: 'Alexander'},
    ]

    const messagesData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Hello'},
        {id: '3', message: 'Whats up'},
        {id: '4', message: 'Guten tag'},
        {id: '5', message: 'Aloha'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(d => <Dialog name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {messagesData.map(m => <Message id={m.id} message={m.message}/>)}
            </div>
        </div>
    );
};
