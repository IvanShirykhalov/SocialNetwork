import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";


export type UserProfileType = {
    aboutMe?: string | null
    contacts?: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob?: boolean
    lookingForAJobDescription?: string | null
    fullName?: string | null
    userId?: number
    photos: {
        small: string | null
        large: string | null
    }
} | null

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
    status: '',


}

type ActionType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setPhoto>
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
        case "SET-PHOTO":
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}

export const addPost = (newPostBody: string) => ({type: 'ADD-POST', newPostBody} as const)
export const deletePost = (id: string) => ({type: 'DELETE-POST', id} as const)
// export const changeNewPostText = (newPostText: string) => ({type: 'CHANGE-NEW-POST-TEXT', newPostText} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const setPhoto = (photos: { small: string, large: string }) => ({type: 'SET-PHOTO', photos} as const)


export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {

    profileAPI.getUserProfile(userId).then(res => dispatch(setUserProfile(res.data))
    )

}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {

    const res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data))

}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {

    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (photo: File) => async (dispatch: Dispatch) => {

    const res = await profileAPI.savePhoto(photo)
    if (res.data.resultCode === 0) {
        dispatch(setPhoto(res.data.data.photos))
    }
}

export const saveProfile = (profile: UserProfileType) => async (dispatch: Dispatch) => {

    const res = await profileAPI.saveProfile(profile)
    if (res.data.resultCode === 0) {
        dispatch(setUserProfile(profile))
    }

}
