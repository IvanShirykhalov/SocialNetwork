import React, {ChangeEvent, useRef} from 'react';
import {Post, PostPropsType} from "./Post/Post";
import s from './MyPosts.module.css'

export type MyPostPropsType = {
    posts: PostPropsType[]
}

export const MyPosts = (props: MyPostPropsType) => {


    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current !== null) {
            alert(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>New post</div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)}

        </div>
    );
};
