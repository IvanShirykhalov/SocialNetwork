import React from "react";
import {MyPost, MyPostPostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {store} from "../../Redux/state";


export type postsPropsType = {
    newTextPost: string
    AddPost: (message: string) => void
    ChangeNewText: (newText: string) => void
    profileState: {
        posts: Array<MyPostPostType>
    }
}

export function Profile(props: postsPropsType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPost profileState={props.profileState}
                    AddPost={props.AddPost.bind(store.AddPost)}
                    newTextPost={props.newTextPost}
                    ChangeNewText={props.ChangeNewText.bind(store.ChangeNewText)}
            />
        </div>

    )
}
