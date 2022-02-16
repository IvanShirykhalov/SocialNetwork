import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../App";
/*import {MyPostContainer} from "./MyPosts/MyPostsContainer";*/
import {store, StateType} from "../../Redux/redux-store";
import {Store} from "redux";


export type postsPropsType = {
    store: Store<StateType, ActionsType>
    newTextPost: string

}

export function Profile() {


    return (
        <div>
            <ProfileInfo/>
{/*            <MyPostContainer/>*/}
        </div>

    )
}
