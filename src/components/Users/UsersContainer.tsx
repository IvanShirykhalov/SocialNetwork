import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {
    follow, requestUsers,
    setCurrentPage,
    subscriptionChange,
    toggleFollowingProgress,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


type mapStateToProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

type mapDispatchToPropsType = {
    subscriptionChange: (id: string) => void
    toggleFollowingProgress: (followingInProgress: boolean, id: string) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    //setCurrentPage: (page: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}


export type UsersPropsType = mapStateToProps & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, StoreType> {


    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        //this.props.setCurrentPage(page)
        this.props.requestUsers(page, this.props.pageSize)
    }

    render() {


        return (<>
                {
                    (this.props.isFetching
                        ? <Preloader/>
                        : <Users
                            pageSize={this.props.pageSize}
                            totalUsersCount={this.props.totalUsersCount}
                            onPageChanged={this.onPageChanged}
                            currentPage={this.props.currentPage}
                            users={this.props.users}
                            followingInProgress={this.props.followingInProgress}
                            subscriptionChange={this.props.subscriptionChange}
                            toggleFollowingProgress={this.props.toggleFollowingProgress}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                        />)
                }
            </>
        )
    }
}


const mapStateToProps = (state: StoreType): mapStateToProps => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        subscriptionChange,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers,
        follow,
        unfollow,
    }),
    //withAuthRedirectComponent
)(UsersContainer)