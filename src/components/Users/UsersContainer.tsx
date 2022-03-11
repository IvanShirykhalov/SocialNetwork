import {Dispatch} from "redux";
import {StateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Users} from "./Users";
import {currentPageAC, setUsersAC, toggleFollowAC, totalUserCountAC, User, UsersType} from "../../Redux/usersReducer";


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
    setTotalUsersCount: (totalCount: number)=> void
}

export type UsersContainerPropsType = usersMapStateToProps & usersMapDispatchToPropsType

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
        setTotalUsersCount: (totalCount: number)=>{
            dispatch(totalUserCountAC(totalCount))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
