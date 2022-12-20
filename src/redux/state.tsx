import {DialogPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";


let rerenderEntireTree = (state: StateType) => {
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

export const state: StateType = {
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

}

export const addPost = (message: string) => {
    state.profilePage.posts.push({id: '5', message: state.profilePage.newPostText, likeCount: 0})
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const changeNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree(state)
}

export const observer = (observer: any) => {
    rerenderEntireTree = observer
}