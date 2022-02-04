import React from "react";
import s from './Post.module.css'
import {MyPostPostType} from "../MyPosts";




export function Post(props: MyPostPostType) {
    return (

        <div className={s.item}>
            <img
                src={'https://cdn-icons-png.flaticon.com/128/4600/4600204.png'} alt={' '}/>
            {props.message}
            <div><span>like {props.likeCount}</span></div>

        </div>
    )
};
