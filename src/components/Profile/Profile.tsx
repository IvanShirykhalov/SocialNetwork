import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";


export type postsPropsType = {
    /*    store: Store<StateType, ActionsType>
        newTextPost: string*/
    profile: ProfilePropsType | null

}


export function Profile(props: postsPropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>

    )
}
