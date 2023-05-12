import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {UserReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";


export type StoreType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<StoreType, any, AnyAction>

const rootReducer = (
    combineReducers({
            dialogsPage: dialogsReducer,
            profilePage: profileReducer,
            usersPage: UserReducer,
            auth: authReducer,
            form: formReducer,
            app: appReducer,
        }
    )
)

export const store = createStore(rootReducer, applyMiddleware(thunk))


//@ts-ignore
window.store = store

