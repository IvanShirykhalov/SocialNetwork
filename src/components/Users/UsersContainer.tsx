import {Dispatch} from "redux";
import {StateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {currentPageAC, setUsersAC, toggleFollowAC, totalUserCountAC, User} from "../../Redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";


export type usersMapStateToProps = {
    usersPage: Array<User>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type usersMapDispatchToPropsType = {
    setUsers: (u: Array<User>) => void
    toggleFollow: (id: number) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersContainerPropsType = usersMapStateToProps & usersMapDispatchToPropsType

class UsersContainerComponent extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )


    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })

    }

    render() {


        return (
            <Users usersPage={this.props.usersPage}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   pageSize={this.props.pageSize}
                   toggleFollow={this.props.toggleFollow}
            />

        )
    }
}

const mapStateToProps = (state: StateType): usersMapStateToProps => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }

}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsers: (users: Array<User>) => {
            dispatch(setUsersAC(users))
        },

        toggleFollow: (uID: number) => {
            dispatch(toggleFollowAC(uID))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(currentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(totalUserCountAC(totalCount))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);
