import {DialogPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";
import {AddMessageAC, changeNewMessageTextAC, dialogsPageReducer} from "./dialogsPageReducer";
import {AddPostAC, changeNewPostTextAC, profilePageReducer} from "./profilePageReducer";


export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void

}
export type DialogsPageType = {
    dialogs: DialogPropsType[]
    messages: MessagePropsType[]
    newMessageText: string
}
export type ProfilePageType = {
    posts: PostPropsType[]
    newPostText: string
}
export type StateType = {
    dialogsPage: DialogsPageType,
    profilePage: ProfilePageType

}
export type ActionType =
    ReturnType<typeof AddMessageAC>
    | ReturnType<typeof changeNewMessageTextAC>
    | ReturnType<typeof AddPostAC>
    | ReturnType<typeof changeNewPostTextAC>

export const store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Oleg'},
                {id: '2', name: 'Vladimir'},
                {id: '3', name: 'Petr'},
                {id: '4', name: 'Fedor'},
                {id: '5', name: 'Alexander'},
            ],
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'Hello'},

            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you?', likeCount: 2},
                {id: '2', message: 'Hi', likeCount: 10},
                {id: '3', message: 'How are you?', likeCount: 4},
            ],
            newPostText: ''
        },

    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        //dialogsPageReducer(this._state, action)
        //profilePageReducer(this._state, action)
        //this._callSubscriber()
    }
}



