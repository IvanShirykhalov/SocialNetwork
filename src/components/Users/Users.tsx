import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../img/1.png'
import {StoreType} from "../../redux/redux-store";


export class Users extends React.Component<UsersPropsType, StoreType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                //this.props.setTotalUsersCount(res.data.totalUsersCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((res) => this.props.setUsers(res.data.items))
    }

    render() {

        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        const curP = this.props.currentPage;
        const curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        const curPL = curP + 5;
        const slicedPages = pages.slice(curPF, curPL);

        return (
            <div>
                <div>{slicedPages.map(p => <span onClick={() => {
                    this.onPageChanged(p)
                }}
                                                 className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>)}
                </div>
                {this.props.users.map(u => {

                    const onClick = () => this.props.subscriptionChange(u.id)

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
                                {/*                                <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>*/}
                        </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}