import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";


export type StoreType = ReturnType<typeof rootReducer>

const rootReducer = (
    combineReducers({
            dialogsPage: dialogsPageReducer,
            profilePage: profilePageReducer,
        }
    )
)

export const store = createStore(rootReducer)