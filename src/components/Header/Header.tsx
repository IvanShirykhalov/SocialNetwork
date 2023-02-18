import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <img
                src={'https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg'}
                alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );
};
