import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={'Igor'} id={'1'}/>
                <Dialog name={'Valera'} id={'2'}/>
                <Dialog name={'Vova'} id={'3'}/>
                <Dialog name={'Sveta'} id={'4'}/>
                <Dialog name={'Petya'} id={'5'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Hello'}/>
                <Message message={'Guten tag'}/>
            </div>
        </div>
    );
};
