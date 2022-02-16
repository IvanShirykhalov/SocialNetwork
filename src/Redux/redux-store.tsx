import {combineReducers, createStore, Store} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import {ActionsType} from "../App";


const reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer
})

export type StateType = ReturnType<typeof reducers>



export const store: Store<StateType, ActionsType> = createStore(reducers)
