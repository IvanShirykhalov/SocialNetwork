import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../img/1.png";
import {Button} from "@mui/material";
import {User} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


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
        if (pages.length < 15) {
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
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={s.userPhoto} alt={'user photo'}/>
                                </NavLink>
                            </div>
                            <div>
                                <div>
                                    {u.followed ?
                                        <Button onClick={(id) => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {}, {
                                                    withCredentials: true, headers: {
                                                        'API-KEY': '141aa447-788e-402f-a325-e0cd7679cd7e'
                                                    }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.toggleFollow(u.id)
                                                    }
                                                })
                                        }
                                        }>Follow</Button> :
                                        <Button onClick={(id) => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {
                                                    withCredentials: true, headers: {
                                                        'API-KEY': '141aa447-788e-402f-a325-e0cd7679cd7e'
                                                    }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.toggleFollow(u.id)
                                                    }
                                                })
                                        }}>Unfollowed</Button>}
                                </div>
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
