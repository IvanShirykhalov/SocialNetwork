import React, {ChangeEvent} from "react";
import s from './../Profile.module.css'
import {Post} from "./Post/Post";
import {Button, TextField} from "@mui/material";
import {MyPostContainerPropsType} from "./MyPostsContainer";


export function MyPost(props: MyPostContainerPropsType) {

    const onClickHandler = () => props.addPost()

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        props.onPostChange(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <div className={s.postsBlock}>
                    <TextField onChange={onChangeHandler} value={props.profilePage.newTextPost}/>
                </div>
                <div className={s.postsBlock}>
                    <Button onClick={onClickHandler}>Add post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {props.profilePage.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)}
            </div>
        </div>
    )
};
