import React, {KeyboardEvent, ChangeEvent} from 'react';
import {Post, PostPropsType} from "./Post/Post";
import s from './MyPosts.module.css'
import {ActionType, AddPostAC, changeNewPostTextAC} from "../../../redux/state";

export type MyPostPropsType = {
    posts: PostPropsType[]

    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPosts = (props: MyPostPropsType) => {

    const addPost = () => props.dispatch(AddPostAC())

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(changeNewPostTextAC(e.currentTarget.value))


    const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPost()
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
