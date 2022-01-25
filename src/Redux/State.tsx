export type propsMessageType = {
    message: string
}

export type postsPropsType = {
    addPost: (postMessage: string)=> void
    profileState: {
        posts: Array<MyPostPostType>
    }
}

export type propsDialogItemType = {
    name: string
    id: number
}

export type MyPostPostType = {
    id: number
    message: string
    likeCount: number
}

export type PropsType = {
    addPost: (postMessage: string)=> void
    state: {
        dialogsPage: {
            dialogs: Array<propsDialogItemType>
            messages: Array<propsMessageType>
        }
        profilePage: {
            posts: Array<MyPostPostType>
        }
    }
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likeCount: 12},
            {id: 2, message: 'Hello', likeCount: 6},
            {id: 3, message: 'Aloha', likeCount: 0},
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

export const addPost = (postMessage: string) =>{
    const newPost: MyPostPostType = {
        id: new Date().getTime(),
        message: postMessage,
        likeCount: 0
    }

    state.profilePage.posts.push(newPost)
}
