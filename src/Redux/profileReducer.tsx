import {ActionsType, AddPostActionType, ChangeNewTextActionType, profilePageType, StateType} from "./state";
import {MyPostPostType} from "../components/Profile/MyPosts/MyPosts";


const profileReducer = (state: profilePageType, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: MyPostPostType = {
                id: new Date().getTime(),
                message: action.newTextPost,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newTextPost = ''
            return state;
        case 'CHANGE-NEW-TEXT':
            state.newTextPost = action.newText
            return state;
        default:
            return state
    }

    return state
}

export const addPostAC = (newTextPost: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newTextPost: newTextPost

    }
}
export const onPostChangeAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    }
}


export default profileReducer

