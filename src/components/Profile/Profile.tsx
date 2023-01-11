import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";
import {ActionType, StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    store: StoreType
   /* profilePage: {
        posts: PostPropsType[]
        newPostText: string
    }
    dispatch: (action: ActionType) => void*/
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                //profilePage={props.store.getState().profilePage}
                              //dispatch={props.store.dispatch}
            />
        </div>
    );
};
