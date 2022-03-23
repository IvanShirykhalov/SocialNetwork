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
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {userProfileAPI} from "../../api/api";


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

        userProfileAPI.getUserProfile(this.props.currentPage, this.props.pageSize).then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalUsersCount(data.totalCount)
                }
            )


    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        userProfileAPI.getUserProfile(this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
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
