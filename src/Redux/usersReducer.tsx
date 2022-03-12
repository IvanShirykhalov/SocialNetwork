export type initialStateType = typeof initialState

type toggleFollow = {
    type: 'TOGGLE-FOLLOW'
    id: number
}

type setUsers = {
    type: 'SET-USER'
    users: Array<User>
}

type currentPage = {
    type: 'CURRENT-PAGE'
    currentPage: number
}

type totalUsersCount = {
    type: 'TOTAL-USERS-COUNT'
    totalCount: number
}

type toggleIsFetching = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}

type ActionType = toggleFollow | setUsers | currentPage | totalUsersCount | toggleIsFetching

export type UsersType = {
    users: Array<User>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type User = {
    id: number,
    photos: { small: any, large: any }
    followed: boolean,
    name: string,
    status: string,
    /*location: { country: string, city: string }*/
}

const initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}
const usersReducer = (state: initialStateType = initialState, action: ActionType) => {
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
                users: action.users
            }
        }
        case 'CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }

}

export const toggleFollow = (userID: number): toggleFollow => {
    return {
        type: 'TOGGLE-FOLLOW',
        id: userID
    }
}

export const setUsers = (users: Array<User>): setUsers => {
    return {
        type: 'SET-USER',
        users
    }
}
export const currentPage = (currentPage: number): currentPage => {
    return {
        type: 'CURRENT-PAGE',
        currentPage

    }
}
export const totalUsersCount = (totalCount: number): totalUsersCount => {
    return {
        type: 'TOTAL-USERS-COUNT',
        totalCount
    }
}

export const toggleIsFetching = (isFetching: boolean): toggleIsFetching => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    }
}
export default usersReducer
