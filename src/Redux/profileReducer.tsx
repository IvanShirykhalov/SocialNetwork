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
export type setUserProfile = {
    type: 'SET-USER-PROFILE'
    profile: null
}
type actionType = AddPostActionType | ChangeNewTextActionType | setUserProfile


export type profilePageType = {
    posts: Array<MyPostType>
    newTextPost: string
    profile: null
}

const initialStore: profilePageType = {
    newTextPost: '',
    posts: [
        {id: 1, message: 'Hi', likeCount: 12},
    ],
    profile: null
}

const profileReducer = (state = initialStore, action: actionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const post = state.newTextPost
            return {
                ...state,
                newTextPost: '',
                posts: [...state.posts, {id: new Date().getTime(), message: post, likeCount: 0}]
            }
        case 'CHANGE-NEW-TEXT':
            return {...state, newTextPost: action.newText}
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }

}

export const addPostAC = (): AddPostActionType => {
    return {
        type: "ADD-POST"
    }
}
export const onPostChangeAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    }
}

export const setUserProfile = (profile: null): setUserProfile => {
    return {type: "SET-USER-PROFILE", profile}
}


export default profileReducer

