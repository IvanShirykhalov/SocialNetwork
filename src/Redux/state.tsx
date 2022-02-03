import {MyPostPostType} from "../components/Profile/MyPosts/MyPosts";
import {propsDialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
import {propsMessageType} from "../components/Dialogs/Message/Message";
import {rerenderEntireTree} from "../index";

export type PropsType = {
    state: {
        dialogsPage: {
            dialogs: Array<propsDialogItemType>
            messages: Array<propsMessageType>
        }
        profilePage: {
            posts: Array<MyPostPostType>

        }
    }
    addPost: (message: string) => void
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likeCount: 12},
            {id: 1, message: 'Hello', likeCount: 6},
            {id: 1, message: 'Aloha', likeCount: 0},
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

export const AddPost = (message: string) => {
    const newPost: MyPostPostType = {
        id: new Date().getTime(),
        message,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree();
}
