import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../img/1.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersPropsType = {
    slicedPages: number[]
    onPageChanged: (p: number) => void
    currentPage: number
    users: UserType[]
    subscriptionChange: (id: string) => void
}

export const Users = (props: UsersPropsType) => {
        return (
            <div>
                <div>{props.slicedPages.map(p => {
                    return <button
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                        className={props.currentPage === p ? s.selectedPage : ''}
                    >
                        {p}
                    </button>
                })}
                </div>
                {props.users.map(u => {

                    const onClick = () => props.subscriptionChange(u.id)

                    const follow = () => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': 'ba6089c3-d607-4289-9bff-c23a30735991'
                            },
                        }).then((res) => {
                            if (res.data.data.resultCode === 0) {
                                u.followed = true
                            }
                        })
                    }

                    const unfollow = () => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': 'ba6089c3-d607-4289-9bff-c23a30735991'
                            },
                        }).then((res) => {
                            if (res.data.data.resultCode === 0) {
                                u.followed = false
                            }
                        })
                    }

                    return (
                        <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img className={s.usersPhoto}
                                         src={u.photos.small ? u.photos.small : userPhoto}
                                         alt="user avatar"
                                    />
                                </NavLink>
                                </div>
                                    <div>
                                        {u.followed
                                            ? <button
                                                onClick={follow}>
                                                {u.followed && 'subscribed'}
                                            </button>
                                            : <button
                                                onClick={unfollow}>
                                                {!u.followed && 'unsubscribed'}
                                            </button>

                                        }
                                        {/*<button*/}
                                        {/*    onClick={onClick}>*/}
                                        {/*    {u.followed ? 'subscribed' : 'unsubscribed'}*/}
                                        {/*</button>                                        */}
                                    </div>
                        </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                        </span>
                        </div>
                    )
                })}
            </div>
        );
    }
;

