import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";


/*const reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
})*/
export const store = createStore(
    combineReducers({
            dialogsPage: dialogsPageReducer,
            profilePage: profilePageReducer,
        }
    )
)