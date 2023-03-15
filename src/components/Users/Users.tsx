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

export const Users = (props: UsersPropsType) => {


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
{/*                                        {u.followed
                                            ?
                                            <button onClick={() => {
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '4e5ca4d6-33f5-42ea-8844-4766f0c08361'
                                                    },
                                                }).then((res) => {
                                                    if (res.data.resultCode == 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                })
                                            }}>unfollow</button>
                                            :
                                            <button onClick={() => {
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '4e5ca4d6-33f5-42ea-8844-4766f0c08361'
                                                    },
                                                }).then((res) => {
                                                  console.log(res)
                                                    if (res.data.resultCode == 0) {
                                                        console.log(0)
                                                        props.follow(u.id)
                                                    }
                                                })
                                            }}>follow</button>

                                        }*/}
                                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                onClick={() => {
                                                    props.toggleFollowingProgress(true, u.id)
                                                    !u.followed ? props.follow(u.id) : props.unfollow(u.id)
                                                    // ?
                                                    // props.follow(u.id)
                                                    // // followAPI.follow(u.id).then((res) => {
                                                    // //     if (res.resultCode === 0) {
                                                    // //         props.subscriptionChange(u.id)
                                                    // //     }
                                                    // //     props.toggleFollowingProgress(false, u.id)
                                                    // // })
                                                    // :
                                                    // props.unfollow(u.id)
                                                    // // followAPI.unfollow(u.id).then((res) => {
                                                    // //     if (res.resultCode === 0) {
                                                    // //         props.subscriptionChange(u.id)
                                                    // //     }
                                                    // //     props.toggleFollowingProgress(false, u.id)
                                                    // // })
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
    }
;

