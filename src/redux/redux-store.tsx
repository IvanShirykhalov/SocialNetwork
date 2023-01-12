import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";
import {ActionType, StateType, StoreType} from "./store";

/*export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void

}*/
/*const reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
})*/


export const store: StoreType = createStore(
    combineReducers({
            dialogsPage: dialogsPageReducer,
            profilePage: profilePageReducer,
        }
    )
)
