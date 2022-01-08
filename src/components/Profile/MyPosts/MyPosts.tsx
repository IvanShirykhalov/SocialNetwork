import React from "react";
import s from './../Profile.module.css'
import {Post} from "./Post/Post";



export type PostType = {
    id: number
    message: string
    likeCount: number
}


export function MyPost() {

    let postsData = [
        {id: 1, message: 'Hi', likeCount: 12},
        {id: 1, message: 'Hello', likeCount: 6},
        {id: 1, message: 'guten Tag', likeCount: 0},
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
                {postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)}
            </div>
        </div>
    )
};
