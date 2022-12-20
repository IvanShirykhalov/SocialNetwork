import React, {useRef} from 'react';
import {Post, PostPropsType} from "./Post/Post";
import s from './MyPosts.module.css'

export type MyPostPropsType = {
    posts: PostPropsType[]
    addPost: (message: string) => void
    changeNewPostText: (newPostText: string) => void
    newPostText: string
}

export const MyPosts = (props: MyPostPropsType) => {


    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current !== null) {
            props.addPost(newPostElement.current.value)
        }
    }

    const onChange = () => {
        if (newPostElement.current !== null) {
            props.changeNewPostText(newPostElement.current.value)
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>New post</div>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)}

        </div>
    );
};
