import {ActionType} from "./store";
import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";

export type ProfilePageType = {
    posts: PostPropsType[]
    newPostText: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: '1', message: 'Hi, how are you?', likeCount: 2},
        {id: '2', message: 'Hi', likeCount: 10},
        {id: '3', message: 'How are you?', likeCount: 4},
    ],
    newPostText: ''
}

export const profilePageReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            state.posts.push({
                id: '5',
                message: state.newPostText,
                likeCount: 0
            })
            state.newPostText = ''
            break;
        case 'CHANGE-NEW-POST-TEXT':
            state.newPostText = action.newPostText
            break;
        default:
            return state
    }
}

export const AddPostAC = () => ({type: 'ADD-POST'} as const)
export const changeNewPostTextAC = (newPostText: string) => ({type: 'CHANGE-NEW-POST-TEXT', newPostText} as const)