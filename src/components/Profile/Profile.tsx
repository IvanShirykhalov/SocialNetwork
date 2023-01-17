import React from 'react';
import {ProfileInfo} from "./Profileinfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

//export type ProfilePropsType = {}

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};
