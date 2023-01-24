import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../img/1.png'

export const Users = (props: UsersPropsType) => {

    const urlPhoto = "https://us.123rf.com/450wm/yupiramos/yupiramos1709/yupiramos170900442/85024718-engineer-avatar-.jpg?ver=6"

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((res) => props.setUsers(res.data.items))

    }

    return (
        <div>
            {props.users.map(u => {

                const onClick = () => props.subscriptionChange(u.id)

                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img className={s.usersPhoto}
                                     src={u.photos.small ? u.photos.small : userPhoto}
                                     alt="user avatar"
                                />
                                    </div>
                                    <div>
                                        <button
                                            onClick={onClick}>
                                            {u.followed ? 'subscribed' : 'unsubscribed'}
                                        </button>
                                    </div>
                                    </span>
                        <span>
                             <span>
                                 <div>{u.name}</div>
                                 <div>{u.status}</div>
                            </span>
                                                        <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    );
};
