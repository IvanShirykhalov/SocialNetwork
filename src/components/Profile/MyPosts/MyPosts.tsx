import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export function MyPost() {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div className={s.postsBlock}>
                    <textarea></textarea>
                </div>
                <div className={s.postsBlock}>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={'Hi'} likeCount={12}/>
                <Post message={'Hello'} likeCount={1}/>
            </div>
        </div>
    )
};
