import {StateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,

    setUsers,
    toggleFollow,
    toggleIsFetching,

    User
} from "../../Redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


export type usersMapStateToProps = {
    usersPage: Array<User>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type usersMapDispatchToPropsType = {
    setUsers: (u: Array<User>) => void
    toggleFollow: (id: number) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersContainerPropsType = usersMapStateToProps & usersMapDispatchToPropsType

class UsersContainerComponent extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )


    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })

    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> :
                    <Users usersPage={this.props.usersPage}
                           totalUsersCount={this.props.totalUsersCount}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           pageSize={this.props.pageSize}
                           toggleFollow={this.props.toggleFollow}
                    />}

            </>
        )
    }
}

const mapStateToProps = (state: StateType): usersMapStateToProps => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }

}

export const UsersContainer = connect(mapStateToProps, {
    setUsers, toggleFollow, setCurrentPage,
    setTotalUsersCount, toggleIsFetching
})(UsersContainerComponent);
