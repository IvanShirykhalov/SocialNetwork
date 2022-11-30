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
            <Post post={'post 1'}/>
            <Post post={'post 2'}/>
        </div>
    );
};
