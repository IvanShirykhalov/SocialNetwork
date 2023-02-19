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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


const initialState: UsersPageType = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

type ActionType =
//| ReturnType<typeof subscriptionChange>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

export const UserReducer = (state = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case "SET-USERS":
            return {
                ...state, users: [...action.users],
            }
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)
            }
        // case "CHANGE-SUBSCRIPTION":
        //     return {
        //         ...state,
        //         users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)
        //     }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-USERS-TOTAL-COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}


export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const follow = (id: string) => ({type: 'FOLLOW', id} as const)
export const unfollow = (id: string) => ({type: 'UNFOLLOW', id} as const)
//export const subscriptionChange = (id: string) => ({type: 'CHANGE-SUBSCRIPTION', id} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-USERS-TOTAL-COUNT',
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)