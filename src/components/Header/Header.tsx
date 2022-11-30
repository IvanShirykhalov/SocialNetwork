import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNXPIKaeb4tThD4BUcUE7zPrnU0QPp6OVQiA&usqp=CAU"
                alt="logo"/>
        </div>
    );
};
