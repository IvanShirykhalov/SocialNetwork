import React from "react";
import {MyPost, MyPostPostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type postsPropsType = {

    profileState: {
        posts: Array<MyPostPostType>
    }
}

export function Profile(props: postsPropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPost profileState={props.profileState}/>
        </div>

    )
};
