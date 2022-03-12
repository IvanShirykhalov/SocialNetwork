import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../img/1.png";
import {Button} from "@mui/material";
import {User} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";


type userPropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    usersPage: Array<User>
    toggleFollow: (id: number) => void
}

export const Users = (props: userPropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i < pageCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <Button className={props.currentPage === p ? s.selectPage : ''}
                                   onClick={() => {
                                       props.onPageChanged(p)
                                   }}>{p}</Button>
                })}
            </div>
            {props.usersPage.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/*' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={s.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                <Button onClick={(id) =>
                                    props.toggleFollow(u.id)}>
                                    {u.followed ? 'Follow' : 'Unfollowed'}
                                </Button>
                            </div>
                        </span>
                        <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>

                    </div>
                )
            })}
        </div>
    );
};
