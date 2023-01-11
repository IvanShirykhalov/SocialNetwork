import React, {ChangeEvent} from 'react';
import {MyPosts} from "./MyPosts";
import {PostPropsType} from "./Post/Post";
import {ActionType, StoreType} from "../../../redux/store";
import {AddPostAC, changeNewPostTextAC} from "../../../redux/profilePageReducer";


export type MyPostContainerPropsType = {
    /*    profilePage: {
            posts: PostPropsType[]
            newPostText: string
        }
        dispatch: (action: ActionType) => void*/
    store: StoreType
}

export const MyPostsContainer = (props: MyPostContainerPropsType) => {

    const addPost = () => props.store.dispatch(AddPostAC())

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.store.dispatch(changeNewPostTextAC(e.currentTarget.value))

    return (
        <MyPosts posts={props.store.getState().profilePage.posts}
                 newPostText={props.store.getState().profilePage.newPostText} addPost={addPost}
                 onChange={onChange}/>
    );
};
