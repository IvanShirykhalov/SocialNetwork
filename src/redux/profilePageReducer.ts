import {ActionType, StateType} from "./state";


export const profilePageReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            state.profilePage.posts.push({
                id: '5',
                message: state.profilePage.newPostText,
                likeCount: 0
            })
            state.profilePage.newPostText = ''
            break;
        case 'CHANGE-NEW-POST-TEXT':
            state.profilePage.newPostText = action.newPostText
            break;
        default:
            return state
    }
}

export const AddPostAC = () => ({type: 'ADD-POST'} as const)
export const changeNewPostTextAC = (newPostText: string) => ({type: 'CHANGE-NEW-POST-TEXT', newPostText} as const)