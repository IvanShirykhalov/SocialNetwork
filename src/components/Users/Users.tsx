import React from "react";
import {UsersContainerPropsType} from "./UsersContainer";
import s from './Users.module.css';
import {Button} from "@mui/material";
import axios from 'axios';
import userPhoto from '../../img/1.png';
import {StateType} from "../../Redux/redux-store";
import {render} from "react-dom";

/*
export const Users = (props: UsersContainerPropsType) => {

    const getUsers = () => {
        if (props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => props.setUsers(response.data.items))
        }
    }


    return (
        <div>
            <Button onClick={getUsers}>Get Users</Button>
            {props.usersPage.users.map(u => {

                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </div>
                            <div>
                                <Button onClick={(id) => props.toggleFollow(u.id)}>
                                    {u.followed ? 'Follow' : 'Unfollowed'}
                                </Button>
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            {/!*                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>*!/}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}*/

export class Users extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>
            this.props.setUsers(response.data.items))

    }

    render() {
        return (
            <div>
                {this.props.usersPage.users.map(u => {
                    return (
                        <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </div>
                            <div>
                                <Button onClick={(id) =>
                                    this.props.toggleFollow(u.id)}>
                                    {u.followed ? 'Follow' : 'Unfollowed'}
                                </Button>
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
        )
    }
}
