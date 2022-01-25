import React from "react";
import {MyPost} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsPropsType} from "../../Redux/State";



export function Profile(props: postsPropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPost addPost={props.addPost} profileState={props.profileState}/>
        </div>

    )
};
