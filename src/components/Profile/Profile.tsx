import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../App";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {MyPostType} from "../../Redux/profileReducer";
import {StoreType} from "../../Redux/redux-store";
import {Store} from "redux";


export type postsPropsType = {
    store: Store<StoreType, ActionsType>
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
            <MyPostContainer newTextPost={props.newTextPost}
                             store={props.store}
                             profileState={props.profileState}
                             dispatch={props.dispatch}
            />
        </div>

    )
}
