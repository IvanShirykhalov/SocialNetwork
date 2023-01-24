import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../../redux/redux-store";
import {setUsersAC, subscriptionChangeAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";


type mapStateToProps = {
    users: UserType[]
}

type mapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void
    subscriptionChange: (id: string) => void
}


export type UsersPropsType = mapStateToProps & mapDispatchToPropsType

const mapStateToProps = (state: StoreType): mapStateToProps => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        subscriptionChange: (id: string) => dispatch(subscriptionChangeAC(id)),

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)