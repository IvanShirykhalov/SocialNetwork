import React from 'react';
import s from './NavBar.module.css'

export const NavBar = () => {
    return (
        <div className={s.nav}>
            <div><a className={`${s.item} ${s.active}`}>Profile</a></div>
            <div><a className={s.item}>Messages</a></div>
            <div><a className={s.item}>News</a></div>
            <div><a className={s.item}>Music</a></div>
        </div>
    );
};
