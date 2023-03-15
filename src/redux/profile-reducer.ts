import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";


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
    newPostText: string
    profile: UserProfileType
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likeCount: 2},
        {id: v1(), message: 'Hi', likeCount: 10},
        {id: v1(), message: 'How are you?', likeCount: 4},
    ],
    newPostText: '',
    profile: null,
}

type ActionType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof changeNewPostText>
    | ReturnType<typeof setUserProfile>


export const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: v1(), message: state.newPostText, likeCount: 0}],
                newPostText: ''
            }
        case 'CHANGE-NEW-POST-TEXT':
            return {...state, newPostText: action.newPostText}
        case "SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}

export const addPost = () => ({type: 'ADD-POST'} as const)
export const changeNewPostText = (newPostText: string) => ({type: 'CHANGE-NEW-POST-TEXT', newPostText} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)


export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userId).then((res) => {
        dispatch(setUserProfile(res.data))
    })

}