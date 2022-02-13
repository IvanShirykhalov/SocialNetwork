import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../App";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {store, StoreType} from "../../Redux/redux-store";
import {Store} from "redux";


export type postsPropsType = {
    store: Store<StoreType, ActionsType>
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
