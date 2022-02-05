import React from "react";
import {MyPost, MyPostPostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, store} from "../../Redux/state";


export type postsPropsType = {
    newTextPost: string
    dispatch: (action : ActionsType)=> void
    profileState: {
        posts: Array<MyPostPostType>
    }
}

export function Profile(props: postsPropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPost profileState={props.profileState}
                    newTextPost={props.newTextPost}
                    dispatch={props.dispatch}
            />
        </div>

    )
}
