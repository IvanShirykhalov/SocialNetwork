import {authAPI, securityAPI} from "../api/api";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";
import {AxiosError} from "axios";

type ActionType = ReturnType<typeof setUserData> | ReturnType<typeof getCaptchaSuccess>

export type AuthDataType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: null | string
}

const initialState = {
    id: null as number | null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}


export const authReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-USER-DATA":
        case "GET-CAPTCHA-SUCCESS":
            return {
                ...state,
                ...action.data
            }
        default:
            return state

    }
}


export const setUserData = (data: AuthDataType) => ({type: 'SET-USER-DATA', data} as const)
export const getCaptchaSuccess = (captchaUrl: string) => ({type: 'GET-CAPTCHA-SUCCESS', data: {captchaUrl}} as const)

export const getAuthUserData = () => async (dispatch: AppThunkDispatch) => {

    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        const {id, login, email, isAuth} = res.data.data
        dispatch(setUserData({id, login, email, isAuth: true, captchaUrl: null}))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string) => async (dispatch: AppThunkDispatch) => {

    const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit(`login`, {_error: message}))
    }
}

export const logout = () => async (dispatch: AppThunkDispatch) => {

    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        //const {id, login, email, isAuth} = res.data.data
        dispatch(setUserData({id: null, login: null, email: null, isAuth: false, captchaUrl: null}))
    }
}

export const getCaptchaUrl = () => async (dispatch: AppThunkDispatch) => {
    try {
        const res = await securityAPI.captcha()
        dispatch(getCaptchaSuccess(res.data.url))
    } catch (e){
        alert((e as Error))
    }
}