import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    subscriptionChangeAC,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";


type mapStateToProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type mapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void
    subscriptionChange: (id: string) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
}


export type UsersPropsType = mapStateToProps & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, StoreType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
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

        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);


        return (
            <Users slicedPages={slicedPages}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   subscriptionChange={this.props.subscriptionChange}/>
            /*<div>
                <div>{slicedPages.map(p => <button onClick={() => {
                    this.onPageChanged(p)
                }}
                                                   className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</button>)}
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
                                {/!*                                <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>*!/}
                        </span>
                        </div>
                    )
                })}
            </div>*/
        )
    }
}



const mapStateToProps = (state: StoreType): mapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        subscriptionChange: (id: string) => dispatch(subscriptionChangeAC(id)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setUsersTotalCountAC(totalUsersCount)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)