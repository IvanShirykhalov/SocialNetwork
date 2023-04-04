import {AddMessage, changeNewMessageText} from "./dialogs-reducer";
import {addPost, changeNewPostText, ProfilePageType} from "./profile-reducer";
import {DialogsPageType} from "../components/Dialogs/DialogsContainer";

type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void

}


type StateType = {
    dialogsPage: DialogsPageType,
    profilePage: ProfilePageType

}
type ActionType =
    ReturnType<typeof AddMessage>
    | ReturnType<typeof changeNewMessageText>
    | ReturnType<typeof addPost>
    | ReturnType<typeof changeNewPostText>

const store: StoreType = {
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
            newPostText: '',
            profile: null,
            status: ''
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
        //dialogsReducer(this._state, action)
        //profileReducer(this._state, action)
        //this._callSubscriber()
    }
}



