import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, StateType} from "../../Redux/redux-store";
import {Store} from "redux";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";


export type postsPropsType = {
    store: Store<StateType, ActionsType>
    newTextPost: string

}

export function Profile() {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>

    )
}
