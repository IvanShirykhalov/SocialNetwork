import {ActionType} from "./store";
import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";

export type ProfilePageType = {
    posts: PostPropsType[]
    newPostText: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likeCount: 2},
        {id: v1(), message: 'Hi', likeCount: 10},
        {id: v1(), message: 'How are you?', likeCount: 4},
    ],
    newPostText: ''
}

export const profilePageReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            state.posts.push({
                id: v1(),
                message: state.newPostText,
                likeCount: 0
            })
            state.newPostText = ''
            return state
        case 'CHANGE-NEW-POST-TEXT':
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}

export const AddPostAC = () => ({type: 'ADD-POST'} as const)
export const changeNewPostTextAC = (newPostText: string) => ({type: 'CHANGE-NEW-POST-TEXT', newPostText} as const)