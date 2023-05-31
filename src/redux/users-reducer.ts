import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

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
    followingInProgress: string[]
}


const initialState: UsersPageType = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

type ActionType =
    | ReturnType<typeof subscriptionChange>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
//| ReturnType<typeof follow>
//| ReturnType<typeof unfollow>

export const userReducer = (state = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case "SET-USERS":
            return {
                ...state, users: [...action.users],
            }
        case "CHANGE-SUBSCRIPTION":
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)
            }
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
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}


export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const subscriptionChange = (id: string) => ({type: 'CHANGE-SUBSCRIPTION', id} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-USERS-TOTAL-COUNT',
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleFollowingProgress = (followingInProgress: boolean, id: string) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS', followingInProgress, id
} as const)


export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    const res = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.items))
    dispatch(setTotalUsersCount(res.totalCount))

}


// export const followUnfollow = async (userId: string, apiMethod: Function, dispatch: Dispatch) => {
//
//     dispatch(toggleFollowingProgress(true, userId))
//
//     const res = await apiMethod(userId)
//     console.log({apiMethod})
//     if (res.resultCode === 0) {
//         dispatch(subscriptionChange(userId))
//     }
//     dispatch(toggleFollowingProgress(false, userId))
// }
//
// export const follow = (userId: string) => async (dispatch: Dispatch) => {
//
//     await followUnfollow(userId, usersAPI.follow.bind(usersAPI), dispatch)
//
// }
// export const unfollow = (userId: string) => async (dispatch: Dispatch) => {
//
//     await followUnfollow(userId, usersAPI.unfollow.bind(usersAPI), dispatch)
// }

export const follow = (userId: string) => async (dispatch: Dispatch) => {

    dispatch(toggleFollowingProgress(true, userId))
    const res = await usersAPI.follow(userId)
    if (res.resultCode === 0) {
        dispatch(subscriptionChange(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const unfollow = (userId: string) => async (dispatch: Dispatch) => {

    dispatch(toggleFollowingProgress(true, userId))
    const res = await usersAPI.unfollow(userId)
    if (res.resultCode === 0) {
        dispatch(subscriptionChange(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
