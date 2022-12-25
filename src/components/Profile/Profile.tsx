import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";
import {ActionType} from "../../redux/state";

export type ProfilePropsType = {
    profilePage: {
        posts: PostPropsType[]
        newPostText: string
    }
    dispatch: (action: ActionType) => void
    /*addPost: (message: string) => void
    changeNewPostText: (newPostText: string) => void*/
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
                /*addPost={props.addPost}
                changeNewPostText={props.changeNewPostText}*/
            />
        </div>
    );
};
