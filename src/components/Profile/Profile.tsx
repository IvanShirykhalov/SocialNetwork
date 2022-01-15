import React from "react";
import {MyPost, MyPostPostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type postsPropsType = {
    posts: Array<MyPostPostType>
}

export function Profile(props: postsPropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.posts}/>
        </div>

    )
};
