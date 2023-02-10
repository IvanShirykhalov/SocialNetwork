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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)