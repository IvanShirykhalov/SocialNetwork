import React from "react";
import {UsersContainerPropsType} from "./UsersContainer";
import s from './Users.module.css';
import {Button} from "@mui/material";
import axios from 'axios';
import userPhoto from '../../img/1.png';

export class Users extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>
            this.props.setUsers(response.data.items))

    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalUsersCount)
        })

    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i < pageCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? s.selectPage : ''}
                                     onClick={() => {
                                         this.onPageChanged(p)
                                     }}>{p}</span>
                    })}
                </div>
                {this.props.usersPage.map(u => {
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
