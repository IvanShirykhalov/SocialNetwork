import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../App";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {MyPostType} from "../../Redux/profileReducer";


export type postsPropsType = {
    newTextPost: string
    dispatch: (action: ActionsType) => void
    profileState: {
        posts: Array<MyPostType>
    }
}

export function Profile(props: postsPropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer profileState={props.profileState}
                             newTextPost={props.newTextPost}
                             dispatch={props.dispatch}
            />
        </div>

    )
}
