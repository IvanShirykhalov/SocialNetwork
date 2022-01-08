import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export function Dialogs () {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + '' + s.active}>
                    <NavLink to={'/messages/1'}>Ivan</NavLink>
                </div>
                <div className={s.dialog + '' + s.active}>
                    <NavLink to={'/messages/2'}>Alex</NavLink>
                </div>
                <div className={s.dialog + '' + s.active}>
                    <NavLink to={'/messages/3'}>Kate</NavLink>
                </div>
                <div className={s.dialog + '' + s.active}>
                    <NavLink to={'/messages/4'}>John</NavLink>
                </div>
                <div className={s.dialog + '' + s.active}>
                    <NavLink to={'/messages/5'}>Andrew</NavLink>
                </div>
                <div className={s.dialog + '' + s.active}>
                    <NavLink to={'/messages/6'}>Stiven</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Good morning</div>
            </div>
        </div>
    )
}
