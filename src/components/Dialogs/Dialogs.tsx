import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>Igor</div>
                <div className={s.dialog}>Valera</div>
                <div className={s.dialog}>Vova</div>
                <div className={s.dialog}>Pasha</div>
                <div className={s.dialog}>Masha</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>1</div>
                <div className={s.message}>2</div>
                <div className={s.message}>3</div>
                <div className={s.message}>4</div>
                <div className={s.message}>5</div>
            </div>
        </div>
    );
};
