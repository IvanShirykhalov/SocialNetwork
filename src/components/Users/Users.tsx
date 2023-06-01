import React from 'react';
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


type UsersPropsType = {
    onPageChanged: (p: number) => void
    currentPage: number
    users: UserType[]
    subscriptionChange: (id: string) => void
    toggleFollowingProgress: (followingInProgress: boolean, id: string) => void
    followingInProgress: string[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    totalUsersCount: number
    pageSize: number
}

export const Users = React.memo((props: UsersPropsType) => {

    return (
        <div>
            <Paginator pageSize={props.pageSize}
                       totalUsersCount={props.totalUsersCount}
                       onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage}/>
            {props.users.map(u => {
                return (
                    <User key={u.id}
                          user={u}
                          followingInProgress={props.followingInProgress}
                          toggleFollowingProgress={props.toggleFollowingProgress}
                          follow={props.follow}
                          unfollow={props.unfollow}
                    />
                )
            })}
        </div>
    );
})

