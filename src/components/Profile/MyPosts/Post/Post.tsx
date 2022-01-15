import React from "react";
import s from './Post.module.css'
import {MyPostPostType} from "../MyPosts";


export function Post(props: MyPostPostType) {
    return (

        <div className={s.item}>
            <img
                src={'https://htmlcolorcodes.com/assets/images/colors/bright-blue-color-solid-background-1920x1080.png'}/>
            {props.message}
            <div><span>like {props.likeCount}</span></div>

        </div>
    )
};
