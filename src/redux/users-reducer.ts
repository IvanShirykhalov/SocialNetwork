export type UserType = {
    id: string
    photos: {
        large: string | null
        small: string | null
    }
    followed: boolean
    name: string
    status: string
}

export type UsersPageType = {
    users: UserType[]
}


const initialState: UsersPageType = {
    users: []
}

type ActionType =
    | ReturnType<typeof subscriptionChangeAC>
    | ReturnType<typeof setUsersAC>

export const UserReducer = (state = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case "SET-USERS":
            return {
                ...state, users: [...state.users, ...action.users]
            }
        case "CHANGE-SUBSCRIPTION":
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)
            }
        default:
            return state
    }
}


export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const subscriptionChangeAC = (id: string) => ({
    type: 'CHANGE-SUBSCRIPTION', id
} as const)