import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Users.module.css";
import userPhoto from "../../img/1.png";
import {UserType} from "../../redux/users-reducer";


type UserPropsType = {
    user: UserType
    followingInProgress: string[]
    toggleFollowingProgress: (followingInProgress: boolean, id: string) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}
export const User = (props: UserPropsType) => {
    return (
        <div key={props.user.id}>
            <span>
                <div>
                   <NavLink to={`/profile/${props.user.id}`}>
                        <img className={s.usersPhoto}
                             src={props.user.photos.small ? props.user.photos.small : userPhoto}
                             alt="user avatar"
                        />
                   </NavLink>
                </div>
                <div>
                     <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                             onClick={() => {
                                 props.toggleFollowingProgress(true, props.user.id)
                                 !props.user.followed ? props.follow(props.user.id) : props.unfollow(props.user.id)
                             }
                             }>
                     {!props.user.followed ? 'subscribed' : 'unsubscribed'}
                     </button>
                                    </div>
            </span>
            <span>
                <span>
                     <div>{props.user.name}</div>
                     <div>{props.user.status}</div>
                </span>
            </span>
        </div>
    );
};
