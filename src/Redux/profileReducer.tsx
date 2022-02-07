import {ActionsType, profilePageType, StateType} from "./state";
import {MyPostPostType} from "../components/Profile/MyPosts/MyPosts";


export const profileReducer = (state: profilePageType, action: ActionsType) => {
    if (action.type === 'ADD-POST') {
        const newPost: MyPostPostType = {
            id: new Date().getTime(),
            message: action.newTextPost,
            likeCount: 0
        }
        state.posts.push(newPost)
        state.newTextPost = ''

    } else if (action.type === 'CHANGE-NEW-TEXT') {
        state.newTextPost = action.newText

    }

    return state
}


