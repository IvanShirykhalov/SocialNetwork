import React from "react";
import s from './Post.module.css'
import {PostType} from "../MyPosts";


export function Post(props: PostType) {
    return (

        <div className={s.item}>
            <img
                src={'https://htmlcolorcodes.com/assets/images/colors/bright-blue-color-solid-background-1920x1080.png'}/>
            {props.message}
            <div><span>like {props.likeCount}</span></div>

        </div>
    )
};
