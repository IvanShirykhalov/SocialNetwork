import React from "react";
import {UsersContainerPropsType} from "./UsersContainer";
import s from './Users.module.css'

export const Users = (props: UsersContainerPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://cdn-icons.flaticon.com/png/128/4691/premium/4691243.png?token=exp=1645049514~hmac=169f038724c28961d16ef08e92cf9188',
                followed: true,
                fullName: 'Sam',
                status: 'Hello',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 2,
                photoURL: 'https://cdn-icons.flaticon.com/png/128/4691/premium/4691232.png?token=exp=1645049514~hmac=3d8fa896e3c70401bd4b1684eaa66121',
                followed: true,
                fullName: 'Phil',
                status: 'What\'s up',
                location: {country: 'Russia', city: 'SPb'}
            },
            {
                id: 3,
                photoURL: 'https://cdn-icons.flaticon.com/png/128/4691/premium/4691299.png?token=exp=1645049514~hmac=62958afa7f94079617458dae56d8422c',
                followed: false,
                fullName: 'Vanessa',
                status: 'I don\'t get acquainted',
                location: {country: 'Belarus', city: 'Minsk'}
            }
        ])
    }


    return (
        <div>
            {props.usersPage.users.map(u => {

                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoURL} className={s.userPhoto}/>
                            </div>
                            <div>
                                <button onClick={(id) => props.toggleFollow(u.id)}>
                                    {u.followed ? 'Follow' : 'Unfollowed'}
                                </button>
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}