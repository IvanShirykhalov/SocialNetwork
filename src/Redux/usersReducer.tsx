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

type ActionType = toggleFollow | setUsers | currentPage | totalUsersCount

export type UsersType = {
    users: Array<User>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
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
        case "TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
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

export const setUsersAC = (users: Array<User>): setUsers => {
    return {
        type: 'SET-USER',
        users
    }
}
export const currentPageAC = (currentPage: number): currentPage => {
    return {
        type: 'CURRENT-PAGE',
        currentPage

    }
}
export const totalUserCountAC = (totalCount: number): totalUsersCount => {
    return {
        type: 'TOTAL-USERS-COUNT',
        totalCount
    }
}
export default usersReducer
