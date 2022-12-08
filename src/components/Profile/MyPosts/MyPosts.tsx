import React from 'react';
import {Post, PostPropsType} from "./Post/Post";
import s from './MyPosts.module.css'

export type MyPostPropsType = {
    posts: PostPropsType[]
}

export const MyPosts = (props: MyPostPropsType) => {


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>New post</div>
            <div>
                <div>
                    <textarea name="post"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            {props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)}

        </div>
    );
};
