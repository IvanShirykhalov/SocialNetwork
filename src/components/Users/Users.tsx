import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../img/1.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    slicedPages: number[]
    onPageChanged: (p: number) => void
    currentPage: number
    users: UserType[]
    //follow: (id: string) => void
    //unfollow: (id: string) => void
    subscriptionChange: (id: string) => void
    toggleFollowingProgress: (followingInProgress: boolean, id: string) => void
    followingInProgress: string[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

export const Users = React.memo((props: UsersPropsType) => {


    return (
        <div>
            <div>{props.slicedPages.map(p => {
                return <button key={p}
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
                                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                onClick={() => {
                                                    props.toggleFollowingProgress(true, u.id)
                                                    !u.followed ? props.follow(u.id) : props.unfollow(u.id)
                                                }
                                                }>
                                            {!u.followed ? 'subscribed' : 'unsubscribed'}
                                        </button>
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
})

