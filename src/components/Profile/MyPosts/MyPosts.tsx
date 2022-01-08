import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export function MyPost() {
    return (
        <div>
            <div>My Posts</div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message={'Hi'} likeCount={12}/>
            <Post message={'Hello'} likeCount={1}/>
            <Post message={'Good morning'} likeCount={35}/>
        </div>
    )
};
