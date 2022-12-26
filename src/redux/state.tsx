import {DialogPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";


export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void

}
export type StateType = {
    dialogsPage: {
        dialogs: DialogPropsType[]
        messages: MessagePropsType[]
        newMessageText: string
    },
    profilePage: {
        posts: PostPropsType[]
        newPostText: string
    }

}
export type ActionType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof changeNewMessageTextAC>


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
        switch (action.type) {
            case 'ADD-POST':
                this._state.profilePage.posts.push({
                    id: '5',
                    message: this._state.profilePage.newPostText,
                    likeCount: 0
                })
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
                break;
            case 'CHANGE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newPostText
                this._callSubscriber()
                break;
            case "ADD-MESSAGE":
                this._state.dialogsPage.messages.push({
                    id: '6',
                    message: this._state.dialogsPage.newMessageText
                })
                this._state.dialogsPage.newMessageText = ''
                this._callSubscriber()
                break;
            case "CHANGE-NEW-MESSAGE-TEXT":
                this._state.dialogsPage.newMessageText = action.newMessageText
                this._callSubscriber()
        }
    }
}

export const AddPostAC = () => ({type: 'ADD-POST'} as const)
export const changeNewPostTextAC = (newPostText: string) => ({type: 'CHANGE-NEW-POST-TEXT', newPostText} as const)

export const AddMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
export const changeNewMessageTextAC = (newMessageText: string) => ({
    type: 'CHANGE-NEW-MESSAGE-TEXT',
    newMessageText
} as const)