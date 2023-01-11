import React from "react";
import {store} from "./redux-store";
import {StoreType} from "./store";

export const StoreContext = React.createContext(store)

type ProviderPropsType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}