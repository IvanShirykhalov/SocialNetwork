import {MyPostPostType} from "../components/Profile/MyPosts/MyPosts";
import {propsDialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
import {propsMessageType} from "../components/Dialogs/Message/Message";

export type StateType = {
    dialogsPage: {
        dialogs: Array<propsDialogItemType>
        messages: Array<propsMessageType>
    }
    profilePage: {
        newTextPost: string
        posts: Array<MyPostPostType>

    }
}

type AddPostActionType = {
    type: 'ADD-POST'
    newTextPost: string
}

type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}

export type ActionsType = ChangeNewTextActionType | AddPostActionType

export type RootStateType = {
    _state: StateType
    _callSubscriber: () => void
    gerStore: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void

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
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'How are you doing?'},
                {id: 5, message: 'How are you getting on?'},
                {id: 6, message: 'Hey'},
            ],
            dialogs: [
                {id: 1, name: 'Stephen'},
                {id: 2, name: 'Sam'},
                {id: 3, name: 'Igor'},
                {id: 4, name: 'Johnny'},
                {id: 5, name: 'Dilan'},
                {id: 6, name: 'Erik'},
            ],
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
        if (action.type === 'ADD-POST') {
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
        }

    }

}










