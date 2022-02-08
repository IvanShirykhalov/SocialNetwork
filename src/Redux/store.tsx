import {MyPostPostType} from "../components/Profile/MyPosts/MyPosts";
import {propsDialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
import {propsMessageType} from "../components/Dialogs/Message/Message";


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
export type UpdateNewMessageText = {
    type: 'NEW-MESSAGE-TEXT'
    newMessageText: string
}
export type AddPostActionType = {
    type: 'ADD-POST'
    newTextPost: string
}
export type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}
export type sendMessage = {
    type: 'SEND-MESSAGE'
    newMessageText: string
}
export type ActionsType = ChangeNewTextActionType | AddPostActionType | UpdateNewMessageText | sendMessage


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
        //this._state.profilePage = profileReducer(this._state.profilePage, action)
        //this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)


        this._callSubscriber()

    }

}










