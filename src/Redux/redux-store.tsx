import {combineReducers, createStore, Store} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import {ActionsType, RootStateType} from "./store";

const reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer
})

export type StoreType = ReturnType<typeof reducers>



export const store: Store<StoreType, ActionsType> = createStore(reducers)
