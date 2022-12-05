import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <div><a className={s.item} href={'/profile'}>Profile</a></div>
            <div><a className={s.item} href={'/dialogs'}>Messages</a></div>
            <div><a className={s.item} href={'/news'}>News</a></div>
            <div><a className={s.item} href={'/music'}>Music</a></div>
        </div>
    );
};
