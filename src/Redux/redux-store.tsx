import {combineReducers, createStore, Store} from "redux";
import dialogsReducer, {sendMessage, UpdateNewMessageText} from "./dialogsReducer";
import profileReducer, {AddPostActionType, ChangeNewTextActionType} from "./profileReducer";

export type ActionsType = ChangeNewTextActionType | AddPostActionType | UpdateNewMessageText | sendMessage


const reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer
})

export type StateType = ReturnType<typeof reducers>



export const store: Store<StateType, ActionsType> = createStore(reducers)
