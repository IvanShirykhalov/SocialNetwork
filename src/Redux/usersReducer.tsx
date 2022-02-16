export type initialStateType = typeof initialState

type toggleFollow = {
    type: 'TOGGLE-FOLLOW'
    id: number
}

type setUsers = {
    type: 'SET-USER'
    users: Array<user>
}

export type UsersType = {
    users: Array<user>
}

export type user = {
    id: number,
    photoURL: string
    followed: boolean,
    fullName: string,
    status: string,
    location: { country: string, city: string }
}

const initialState: UsersType = {
    users: []
}
const usersReducer = (state: initialStateType = initialState, action: toggleFollow | setUsers) => {
    switch (action.type) {
        case 'TOGGLE-FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        case 'SET-USER': {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }

}

export const toggleFollowAC = (userID: number): toggleFollow => {
    return {
        type: 'TOGGLE-FOLLOW',
        id: userID
    }
}

export const setUsersAC = (users: Array<user>): setUsers => {
    return {
        type: 'SET-USER',
        users
    }
}

export default usersReducer
