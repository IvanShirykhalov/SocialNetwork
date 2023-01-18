import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {UserReducer} from "./users-reducer";


export type StoreType = ReturnType<typeof rootReducer>

const rootReducer = (
    combineReducers({
            dialogsPage: dialogsReducer,
            profilePage: profileReducer,
            usersPage: UserReducer,
        }
    )
)

export const store = createStore(rootReducer)