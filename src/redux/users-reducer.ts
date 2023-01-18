import {v1} from 'uuid'

export type UserType = {
    id: string
    followed: boolean
    name: string
    status: string
    location: {
        country: string
        city: string
    }
}

export type UsersPageType = {
    users: UserType[]
}

const initialState: UsersPageType = {
    users: [
        //{id: v1(), followed: false, name: 'Igor', status: 'I\'m Igor', location: {country: 'UK', city: 'Liverpool'}},
        //{id: v1(), followed: false, name: 'Masha', status: 'I\'m Masha', location: {country: 'USA', city: 'Detroit'}},
        //{id: v1(), followed: true, name: 'Same', status: 'I\'m Same', location: {country: 'Australia', city: 'Sidney'}},

    ]
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
                users: state.users.map(u => u.id === action.id ? {...u, followed: action.follow} : u)
            }
        default:
            return state
    }
}


export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const subscriptionChangeAC = (id: string, follow: boolean) => ({
    type: 'CHANGE-SUBSCRIPTION', id, follow
} as const)