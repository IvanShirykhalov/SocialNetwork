import React from "react";
import {MyPost, MyPostPostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type postsPropsType = {
    AddPost: (message: string) => void
    profileState: {
        posts: Array<MyPostPostType>
    }
}

export function Profile(props: postsPropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPost profileState={props.profileState} AddPost={props.AddPost}/>
        </div>

    )
};
