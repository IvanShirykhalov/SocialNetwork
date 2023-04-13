import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunkDispatch} from "./redux-store";

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

export const getAuthUserData = () => (dispatch: AppThunkDispatch) => {
    authAPI.me()
        .then((res) => {
            if (res.data.resultCode === 0) {
                const {id, login, email, isAuth} = res.data.data
                dispatch(setUserData({id, login, email, isAuth: true}))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: AppThunkDispatch) => {
    authAPI.login(email, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = () => (dispatch: AppThunkDispatch) => {
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                //const {id, login, email, isAuth} = res.data.data
                dispatch(setUserData({id: null, login: null, email: null, isAuth: false}))
            }
        })
}