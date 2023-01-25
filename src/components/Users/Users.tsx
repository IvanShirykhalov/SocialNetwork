import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../img/1.png'
import {StoreType} from "../../redux/redux-store";


export class Users extends React.Component<UsersPropsType, StoreType> {

    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((res) => this.props.setUsers(res.data.items))
    }

    render() {
        return (
            <div>
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
                                                        <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}