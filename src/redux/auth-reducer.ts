import {authAPI} from "../api/api";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";

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
                ...action.data
            }
        default:
            return state

    }
}


export const setUserData = (data: AuthDataType) => ({type: 'SET-USER-DATA', data} as const)

export const getAuthUserData = () => async (dispatch: AppThunkDispatch) => {

    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        const {id, login, email, isAuth} = res.data.data
        dispatch(setUserData({id, login, email, isAuth: true}))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: AppThunkDispatch) => {

    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit(`login`, {_error: message}))
    }
}

export const logout = () => async (dispatch: AppThunkDispatch) => {

    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        //const {id, login, email, isAuth} = res.data.data
        dispatch(setUserData({id: null, login: null, email: null, isAuth: false}))
    }
}