import {Dispatch} from "redux";
import {StateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Users} from "./Users";
import {setUsersAC, toggleFollowAC, user, UsersType} from "../../Redux/usersReducer";


export type usersMapStateToProps = {
    usersPage: UsersType
}
export type usersMapDispatchToPropsType = {

}

export type UsersContainerPropsType = usersMapStateToProps & usersMapDispatchToPropsType

const mapStateToProps = (state: StateType): usersMapStateToProps => {
    return {
        usersPage: state.usersPage
    }

}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsers: (users: Array<user>) => {
            dispatch(setUsersAC(users))
        },

        toggleFollow: (uID: number) => {
                dispatch(toggleFollowAC(uID))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
