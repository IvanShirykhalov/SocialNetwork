import {combineReducers, createStore, Store} from "redux";
import dialogsReducer, {sendMessage, UpdateNewMessageText} from "./dialogsReducer";
import profileReducer, {AddPostActionType, ChangeNewTextActionType} from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

export type ActionsType = ChangeNewTextActionType | AddPostActionType | UpdateNewMessageText | sendMessage


const reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type StateType = ReturnType<typeof reducers>



export const store: Store<StateType, ActionsType> = createStore(reducers)
