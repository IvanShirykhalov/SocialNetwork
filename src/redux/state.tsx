import {DialogPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";


export type StoreType = {
    _state: StateType
    rerenderEntireTree: ()=> void
    getState: () => StateType
    addPost: (message: string) => void
    changeNewPostText: (newPostText: string) => void
    subscribe: (observer: () => void) => void

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
    rerenderEntireTree() {
    },
    getState() {
        return this._state
    },
    addPost(message: string) {
        this._state.profilePage.posts.push({id: '5', message: this._state.profilePage.newPostText, likeCount: 0})
        this._state.profilePage.newPostText = ''
        this.rerenderEntireTree()
    },
    changeNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this.rerenderEntireTree()
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },

}
