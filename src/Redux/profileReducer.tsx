
export type MyPostType = {
    id: number
    message: string
    likeCount: number
}
export type AddPostActionType = {
    type: 'ADD-POST'

}
export type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}
export type profilePageType = {
    posts: Array<MyPostType>
    newTextPost: string
}

const initialStore: profilePageType = {
    newTextPost: '',
    posts: [
        {id: 1, message: 'Hi', likeCount: 12},
        /*{id: 1, message: 'Hello', likeCount: 6},*/
    ],
}

const profileReducer = (state = initialStore, action: AddPostActionType | ChangeNewTextActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const message = state.newTextPost
            return {
                ...state,
                newTextPost:'',
                posts: [...state.posts, {id: new Date().getTime(), message, likeCount: 0}]
            }
/*            const newPost: MyPostType = {
                id: new Date().getTime(),
                message: action.newTextPost,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newTextPost = ''
            return state;*/
        case 'CHANGE-NEW-TEXT':
            return {...state, newTextPost: action.newText}
/*            state.newTextPost = action.newText
            return state;*/
        default:
            return state
    }

}

export const addPostAC = (): AddPostActionType => {
    return {
        type: "ADD-POST",

    }
}
export const onPostChangeAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    }
}


export default profileReducer

