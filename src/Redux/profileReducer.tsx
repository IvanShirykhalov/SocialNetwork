import {ActionsType, StateType} from "./state";
import {MyPostPostType} from "../components/Profile/MyPosts/MyPosts";


export const profileReducer = (state: StateType, action: ActionsType) => {
    if (action.type === 'ADD-POST') {
        const newPost: MyPostPostType = {
            id: new Date().getTime(),
            message: action.newTextPost,
            likeCount: 0
        }
        state.profilePage.posts.push(newPost)
        state.profilePage.newTextPost = ''

    } else if (action.type === 'CHANGE-NEW-TEXT') {
        state.profilePage.newTextPost = action.newText

    }

    return state
}


