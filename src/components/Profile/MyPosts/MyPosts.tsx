import React, {useRef, KeyboardEvent} from 'react';
import {Post, PostPropsType} from "./Post/Post";
import s from './MyPosts.module.css'
import {ActionType, AddPostAC, changeNewPostTextAC} from "../../../redux/state";

export type MyPostPropsType = {
    posts: PostPropsType[]

    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPosts = (props: MyPostPropsType) => {


    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current !== null) {
            props.dispatch(AddPostAC())
        }
    }

    const onChange = () => {
        if (newPostElement.current !== null) {
            props.dispatch(changeNewPostTextAC(newPostElement.current.value))
        }
    }

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
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onChange}
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
