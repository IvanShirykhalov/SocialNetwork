import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {UserReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";


export type StoreType = ReturnType<typeof rootReducer>

const rootReducer = (
    combineReducers({
            dialogsPage: dialogsReducer,
            profilePage: profileReducer,
            usersPage: UserReducer,
            auth: authReducer,
        }
    )
)

export const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store

