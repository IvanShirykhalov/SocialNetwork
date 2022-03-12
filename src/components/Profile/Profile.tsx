import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, StateType} from "../../Redux/redux-store";
import {Store} from "redux";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";


export type postsPropsType = {
/*    store: Store<StateType, ActionsType>
    newTextPost: string*/
    profile: any

}


export function Profile(props: postsPropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>

    )
}
