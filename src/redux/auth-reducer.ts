import {Dispatch} from "redux";
import {headerAPI} from "../api/api";

type ActionType = ReturnType<typeof setUserData>

export type AuthDataType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}


export const authReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state

    }
}


export const setUserData = (data: AuthDataType) => ({type: 'SET-USER-DATA', data} as const)

export const authMe = () => (dispatch: Dispatch) => {
    headerAPI.authMe()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(res.data.data))
            }
        })
}