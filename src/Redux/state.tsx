import {MyPostPostType} from "../components/Profile/MyPosts/MyPosts";
import {propsDialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
import {propsMessageType} from "../components/Dialogs/Message/Message";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export type dialogsPageType = {
    dialogs: Array<propsDialogItemType>
    messages: Array<propsMessageType>
    newMessageText: string
}
export type profilePageType = {
    posts: Array<MyPostPostType>
        newTextPost: string
}

export type StateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
}
export type RootStateType = {
    _state: StateType
    _callSubscriber: () => void
    gerStore: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void

}
type UpdateNewMessageText = {
    type: 'NEW-MESSAGE-TEXT'
    newMessageText: string
}
type AddPostActionType = {
    type: 'ADD-POST'
    newTextPost: string
}
type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}
type sendMessage = {
    type: 'SEND-MESSAGE'
    newMessageText: string
}
export type ActionsType = ChangeNewTextActionType | AddPostActionType | UpdateNewMessageText | sendMessage


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
export const newMessageTextAC = (newMessageText: string): UpdateNewMessageText => {
    return {
        type: "NEW-MESSAGE-TEXT",
        newMessageText: newMessageText
    }
}
export const sendMessageAC = (newMessageText: string): sendMessage => {
    return {
        type: "SEND-MESSAGE",
        newMessageText: newMessageText
    }
}


export let store: RootStateType = {
    _state: {
        profilePage: {
            newTextPost: '',
            posts: [
                {id: 1, message: 'Hi', likeCount: 12},
                {id: 1, message: 'Hello', likeCount: 6},
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Stephen'},
                {id: 2, name: 'Sam'},
                {id: 3, name: 'Igor'},
                {id: 4, name: 'Johnny'},
                {id: 5, name: 'Dilan'},
                {id: 6, name: 'Erik'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'How are you doing?'},
            ],
            newMessageText: ''

        },
    },
    _callSubscriber() {
        console.log('State changed')
    },

    gerStore() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)


        this._callSubscriber()


/*                if (action.type === 'ADD-POST') {
                    const newPost: MyPostPostType = {
                        id: new Date().getTime(),
                        message: action.newTextPost,
                        likeCount: 0
                    }
                    this._state.profilePage.posts.push(newPost)
                    this._state.profilePage.newTextPost = ''
                    this._callSubscriber();
                } else if (action.type === 'CHANGE-NEW-TEXT') {
                    this._state.profilePage.newTextPost = action.newText
                    this._callSubscriber();
                } else if (action.type === 'NEW-MESSAGE-TEXT') {
                    this._state.dialogsPage.newMessageText = action.newMessageText
                    this._callSubscriber();
                } else if (action.type === 'SEND-MESSAGE') {
                    const newMessage: propsMessageType = {
                        id: new Date().getTime(),
                        message: action.newMessageText
                    }
                    this._state.dialogsPage.messages.push(newMessage)
                    this._state.dialogsPage.newMessageText = ''
                    this._callSubscriber()
                }*/

    }

}










