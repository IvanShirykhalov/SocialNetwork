import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";
import {StoreType} from "./store";


export const store: StoreType = createStore(
    combineReducers({
            dialogsPage: dialogsPageReducer,
            profilePage: profilePageReducer,
        }
    )
)
