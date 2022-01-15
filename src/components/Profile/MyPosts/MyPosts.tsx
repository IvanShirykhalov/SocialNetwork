import React from "react";
import s from './../Profile.module.css'
import {Post} from "./Post/Post";
import {postsPropsType} from "../Profile";

export type MyPostPostType = {
    id: number
    message: string
    likeCount: number
}

export function MyPost(props: postsPropsType) {

/*    let posts = [
        {id: 1, message: 'Hi', likeCount: 12},
        {id: 1, message: 'Hello', likeCount: 6},
        {id: 1, message: 'guten Tag', likeCount: 0},
    ]*/

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
                {props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)}
            </div>
        </div>
    )
};
