import {combineReducers, createStore, Store} from "redux";
import dialogsReducer, {DialogsActionType} from "./dialogsReducer";
import profileReducer, {ProfileActionType} from "./profileReducer";
import authReducer, {AuthActionType} from "./authReducer";
import usersReducer from "./usersReducer";


export type ActionsType = ProfileActionType | DialogsActionType | AuthActionType


const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type StateType = ReturnType<typeof reducers>


export const store: Store<StateType, ActionsType> = createStore(reducers)
