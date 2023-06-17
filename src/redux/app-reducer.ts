import {getAuthUserData} from "./auth-reducer";
import {AppThunkDispatch} from "./redux-store";

export type InitialAppStateType = {
    initialized: boolean
}
type ActionType = ReturnType<typeof initializedSuccess>


const initialState: InitialAppStateType = {
    initialized: false
}


export const appReducer = (state = initialState, action: ActionType): InitialAppStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state, initialized: true
            }
        default:
            return state
    }

}

export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'} as const)

export const initializeApp = () => async (dispatch: AppThunkDispatch) => {

    await dispatch(getAuthUserData())
    dispatch(initializedSuccess())

}