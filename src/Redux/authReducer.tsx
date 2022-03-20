type initialStateType = {
    userId: null | number
    email: null | string
    login: null | boolean
    isAuth: boolean
}

type actionType = setUserDataType

type setUserDataType = {
    type: 'SET-USER-DATA'
    data: initialStateType
}

const initialStore: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialStore, action: actionType) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default: {
            return state
        }
    }
}

export const setAuthUserData = (data: initialStateType): setUserDataType => {
    return {
        type: "SET-USER-DATA", data
    }
}

export default authReducer