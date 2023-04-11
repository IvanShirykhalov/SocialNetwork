import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {MyPostPropsType} from "./MyPostsContainer";
import {AddPostFormRedux} from "./AddPostForm";


export const MyPosts = (props: MyPostPropsType) => {

    const addPost = () => props.addPost()

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.changeNewPostText(e.currentTarget.value)
    const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            props.addPost()
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>New post</div>
            <AddPostFormRedux/>
            {props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)}
        </div>
    );
};


