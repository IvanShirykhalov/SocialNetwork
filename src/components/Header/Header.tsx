import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthDataType} from "../../redux/auth-reducer";
import Login from "../Login/Login";


type HeaderPropsType = {
    auth: AuthDataType
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <img
                src={'https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg'}
                alt="logo"/>
            <div className={s.loginBlock}>
                {props.auth.isAuth
                    ? <div>
                        {props.auth.login}
                        <button onClick={props.logout}>logOut</button>
                    </div>
                    : <NavLink to={'/login'}><Login/></NavLink>
                }
            </div>
        </div>
    );
};
