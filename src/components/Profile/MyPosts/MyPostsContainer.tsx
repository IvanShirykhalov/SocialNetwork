import React, {ChangeEvent} from 'react';
import {MyPosts} from "./MyPosts";
import {PostPropsType} from "./Post/Post";
import {ActionType} from "../../../redux/store";
import {AddPostAC, changeNewPostTextAC} from "../../../redux/profilePageReducer";


export type MyPostPropsType = {
    posts: PostPropsType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPostsContainer = (props: MyPostPropsType) => {

    const addPost = () => props.dispatch(AddPostAC())

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(changeNewPostTextAC(e.currentTarget.value))

    return (
        <MyPosts posts={props.posts} newPostText={props.newPostText} addPost={addPost} onChange={onChange}/>
    );
};
