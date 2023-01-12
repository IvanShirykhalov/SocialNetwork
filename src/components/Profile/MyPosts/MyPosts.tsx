import React, {KeyboardEvent, ChangeEvent} from 'react';
import {Post, PostPropsType} from "./Post/Post";
import s from './MyPosts.module.css'
import {ActionType} from "../../../redux/store";
import {AddPostAC, changeNewPostTextAC} from "../../../redux/profilePageReducer";

export type MyPostPropsType = {
    posts: PostPropsType[]
    newPostText: string
    addPost: () => void
    onChange: (text: string) => void
}

export const MyPosts = (props: MyPostPropsType) => {


    const addPost = () => props.addPost()

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.onChange(e.currentTarget.value)
    const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            props.addPost()
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>New post</div>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onChange}
                        onKeyPress={onKeyPress}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)}

        </div>
    );
};
