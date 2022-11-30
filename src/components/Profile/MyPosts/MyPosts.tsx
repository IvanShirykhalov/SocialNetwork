import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My post
            <div>New post</div>
            <div>
                <textarea name="post"></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message={'Hi, how are you?'} likeCount={1}/>
            <Post message={'My first post'} likeCount={4}/>
        </div>
    );
};
