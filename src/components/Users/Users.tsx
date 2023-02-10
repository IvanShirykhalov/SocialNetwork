import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../img/1.png";
import {UserType} from "../../redux/users-reducer";


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
                    //className={props.currentPage === p ? s.selectedPage : ''}
                >
                    {p}
                </button>
            })}
            </div>
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
                            {/*<span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>*/}
                        </span>
                    </div>
                )
            })}
        </div>
    );
}
    ;

