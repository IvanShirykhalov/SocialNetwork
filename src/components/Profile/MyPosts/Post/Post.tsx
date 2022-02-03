import React from "react";
import s from './Post.module.css'
import {MyPostPostType} from "../MyPosts";




export function Post(props: MyPostPostType) {
    return (

        <div className={s.item}>
            <img
                src={'https://cdn-icons-png.flaticon.com/512/921/921055.png'} alt={' '}/>
            {props.message}
            <div><span>like {props.likeCount}</span></div>

        </div>
    )
};
