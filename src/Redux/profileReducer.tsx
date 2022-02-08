import {MyPostPostType} from "../components/Profile/MyPosts/MyPosts";


export type AddPostActionType = {
    type: 'ADD-POST'
    newTextPost: string
}
export type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}
export type profilePageType = {
    posts: Array<MyPostPostType>
    newTextPost: string
}

const initialStore: profilePageType = {
    newTextPost: '',
    posts: [
        {id: 1, message: 'Hi', likeCount: 12},
        {id: 1, message: 'Hello', likeCount: 6},
    ],
}

const profileReducer = (state = initialStore, action: AddPostActionType | ChangeNewTextActionType) => {
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

