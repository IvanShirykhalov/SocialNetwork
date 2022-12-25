import {DialogPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";


export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    /*    addPost: (message: string) => void
        changeNewPostText: (newPostText: string) => void*/

    dispatch: (action: ActionType) => void

}
export type StateType = {
    dialogsPage: {
        dialogs: DialogPropsType[]
        messages: MessagePropsType[]
    },
    profilePage: {
        posts: PostPropsType[]
        newPostText: string
    }

}
type AddPostActionType = {
    type: 'ADD-POST'
}
type ChangeNewPostText = {
    type: 'CHANGE-NEW-POST-TEXT'
    newPostText: string
}
export type ActionType = AddPostActionType | ChangeNewPostText


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
                {id: '3', message: 'Whats up'},
                {id: '4', message: 'Guten tag'},
                {id: '5', message: 'Aloha'},
            ],
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
    /*    addPost(message: string) {
            this._state.profilePage.posts.push({id: '5', message: this._state.profilePage.newPostText, likeCount: 0})
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        },
        changeNewPostText(newPostText: string) {
            this._state.profilePage.newPostText = newPostText
            this._callSubscriber()
        },*/
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
        }
    }

}
