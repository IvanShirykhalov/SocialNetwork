import React from 'react';
import s from './Header.module.css'


export const Header = () => {
    return (
        <div className={s.header}>
            <img
                src={'https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg'}
                alt="logo"/>
        </div>
    );
};
