import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export function MyPost() {

    let postsData = [
        {id:1, message: 'Hi', likeCount: 12},
        {id:1, message: 'Hello', likeCount: 6},
        {id:1, message: 'guten Tag', likeCount: 0},
    ]

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
                <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
                <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
                <Post message={postsData[2].message} likeCount={postsData[2].likeCount}/>
            </div>
        </div>
    )
};
