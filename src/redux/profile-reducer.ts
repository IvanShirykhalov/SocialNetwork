import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";


export type UserProfileType = null | {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    posts: PostPropsType[]
    profile: UserProfileType
    status: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: `What's up dude`, likeCount: 2},
    ],
    profile: null,
    status: ''
}

type ActionType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
//  | ReturnType<typeof changeNewPostText>


export const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: v1(), message: action.newPostBody, likeCount: 0}],
            }
        case "DELETE-POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        case "SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPost = (newPostBody: string) => ({type: 'ADD-POST', newPostBody} as const)
export const deletePost = (id: string) => ({type: 'DELETE-POST', id} as const)
// export const changeNewPostText = (newPostText: string) => ({type: 'CHANGE-NEW-POST-TEXT', newPostText} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)


export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userId).then((res) => {
        dispatch(setUserProfile(res.data))
    })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then((res) => {
        dispatch(setStatus(res.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then((res) => {
        console.log(res)
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}
