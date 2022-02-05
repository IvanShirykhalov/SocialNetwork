import React, {ChangeEvent} from "react";
import s from './../Profile.module.css'
import {Post} from "./Post/Post";
import {postsPropsType} from "../Profile";
import {Button, TextField} from "@mui/material";
import {store} from "../../../Redux/state";


export type MyPostPostType = {
    id: number
    message: string
    likeCount: number
}


export function MyPost(props: postsPropsType) {

    const addPost = () => {
        props.AddPost(props.newTextPost)
    }

    const onPosChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        store.ChangeNewText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div className={s.postsBlock}>
                    <TextField onChange={onPosChange} value={props.newTextPost}/>
                </div>
                <div className={s.postsBlock}>
                    <Button onClick={addPost}>Add post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {props.profileState.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)}
            </div>
        </div>
    )
};
