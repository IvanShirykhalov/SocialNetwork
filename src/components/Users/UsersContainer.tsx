import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../../redux/redux-store";
import {setUsersAC, subscriptionChangeAC, UsersPageType, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";


type mapStateToProps = {
    userPage: UsersPageType
}

type mapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void
    subscriptionChange: (id: string, follow: boolean) => void
}


const mapStateToProps = (state: StoreType): mapStateToProps => {
    return {
        userPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        subscriptionChange: (id: string, follow: boolean) => dispatch(subscriptionChangeAC(id, follow)),

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)