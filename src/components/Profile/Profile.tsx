import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";

export type ProfilePropsType = {
    profilePage: {
        posts: PostPropsType[]
        newPostText: string
    }
    addPost: (message: string) => void
    changeNewPostText: (newPostText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}
                     newPostText={props.profilePage.newPostText} changeNewPostText={props.changeNewPostText}
            />
        </div>
    );
};
