import {MyPostPostType} from "../components/Profile/MyPosts/MyPosts";
import {propsDialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
import {propsMessageType} from "../components/Dialogs/Message/Message";
import {rerenderEntireTree} from "../render";

export type RootStateType = {

    dialogsPage: {
        dialogs: Array<propsDialogItemType>
        messages: Array<propsMessageType>
    }
    profilePage: {
        newTextPost: string
        posts: Array<MyPostPostType>

    }
}


export let state = {
    profilePage: {
        newTextPost: '',
        posts: [
            {id: 1, message: 'Hi', likeCount: 12},
/*            {id: 1, message: 'Hello', likeCount: 6},
            {id: 1, message: 'Aloha', likeCount: 0},*/
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
}

export const AddPost = () => {
    const newPost: MyPostPostType = {
        id: new Date().getTime(),
        message: state.profilePage.newTextPost,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newTextPost = ''
    rerenderEntireTree(state);
}

export const ChangeNewText = (newText: string) => {
    state.profilePage.newTextPost = newText
    rerenderEntireTree(state);
}
