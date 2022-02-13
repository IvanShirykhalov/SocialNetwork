import React, {ChangeEvent} from "react";
import s from './../Profile.module.css'
import {Post} from "./Post/Post";
import {Button, TextField} from "@mui/material";
import {MyPostType} from "../../../Redux/profileReducer";


type MyPostPropsType = {
    addPost: () => void
    onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    newTextPost: string
    profileState: {
        posts: Array<MyPostType>
    }
}


export function MyPost(props: MyPostPropsType) {

    return (
        <div className={s.postsBlock}>
            <div>
                <div className={s.postsBlock}>
                    <TextField onChange={props.onPostChange} value={props.newTextPost}/>
                </div>
                <div className={s.postsBlock}>
                    <Button onClick={props.addPost}>Add post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {props.profileState.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)}
            </div>
        </div>
    )
};
