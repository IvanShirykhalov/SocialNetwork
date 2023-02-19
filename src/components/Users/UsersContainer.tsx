import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    //subscriptionChange,
    toggleIsFetching,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";


type mapStateToProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void
    //subscriptionChange: (id: string) => void
    follow: (id: string) => void
    unfollow: (id: string) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


export type UsersPropsType = mapStateToProps & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, StoreType> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then((res) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.toggleIsFetching(false)
            })
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
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users slicedPages={slicedPages}
                             onPageChanged={this.onPageChanged}
                             currentPage={this.props.currentPage}
                             users={this.props.users}
                             follow={this.props.follow}
                             unfollow={this.props.unfollow}
                        //subscriptionChange={this.props.subscriptionChange}

                    />}

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

    }
}


export default connect(mapStateToProps, {
    setUsers,
    follow,
    unfollow,
    //subscriptionChange,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer)