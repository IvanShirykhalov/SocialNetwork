import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthDataPropsType} from "./HeaderContainer";

type HeaderPropsType = {
    setAuthUserData: (data: AuthDataPropsType) => void
    isAuth: boolean
    userId: null | number
    email: null | string
    login: null | boolean
}

export function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img src={'https://cdn.logo.com/hotlink-ok/logo-social-sq.png'} alt={''}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};
