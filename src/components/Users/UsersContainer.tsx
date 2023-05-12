import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    setCurrentPage,
    subscriptionChange,
    toggleFollowingProgress,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {Dialogs} from "../Dialogs/Dialogs";
import {compose} from "redux";


type mapStateToProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
    isAuth: boolean
}

type mapDispatchToPropsType = {
    subscriptionChange: (id: string) => void
    toggleFollowingProgress: (followingInProgress: boolean, id: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (page: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    //setUsers: (users: UserType[]) => void
    //follow: (id: string) => void
    //unfollow: (id: string) => void
    //setTotalUsersCount: (count: number) => void
    //toggleIsFetching: (isFetching: boolean) => void

}


export type UsersPropsType = mapStateToProps & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, StoreType> {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then((res) => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(res.items)
        //         this.props.setTotalUsersCount(res.totalCount)
        //     })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize)
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


        return (<>
                {
                    (this.props.isFetching
                        ? <Preloader/>
                        : <Users
                            slicedPages={slicedPages}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        // @ts-ignore
        isAuth: state.auth.isAuth

    }
}

//const AuthRedirectComponent = withAuthRedirectComponent(UsersContainer)


// export default withAuthRedirectComponent(connect(mapStateToProps, {
//     subscriptionChange,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsers,
//     follow,
//     unfollow,
// }))

// export default withAuthRedirectComponent(compose((connect(mapStateToProps, {
//     subscriptionChange,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsers,
//     follow,
//     unfollow,
// })))(UsersContainer))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        subscriptionChange,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        follow,
        unfollow,
    }),
    //withAuthRedirectComponent
)(UsersContainer)