import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../img/1.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


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
            <Paginator slicedPages={props.slicedPages}
                       onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage}/>
            {props.users.map(u => {
                return (
                    <User key={u.id}
                          user={u}
                          followingInProgress={props.followingInProgress}
                          toggleFollowingProgress={props.toggleFollowingProgress}
                          follow={props.follow}
                          unfollow={props.unfollow}/>
                )
            })}
        </div>
    );
})

