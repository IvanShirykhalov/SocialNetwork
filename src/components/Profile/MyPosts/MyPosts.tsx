import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {

    const postData = [
        {id: '1', message: 'Hi, how are you?', likeCount: 2},
        {id: '2', message: 'Hi', likeCount: 10},
        {id: '3', message: 'How are you?', likeCount: 4},
    ]

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
            {postData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)}

        </div>
    );
};
