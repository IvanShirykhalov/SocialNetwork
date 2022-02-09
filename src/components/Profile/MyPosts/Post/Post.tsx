import React from "react";
import s from './Post.module.css'
import {MyPostPostType} from "../MyPosts";




export function Post(props: MyPostPostType) {
    return (

        <div className={s.item}>
            <img
                src={'https://cdn-icons.flaticon.com/png/128/4691/premium/4691213.png?token=exp=1644418406~hmac=13c31db1927c47e71e9374b9bf85d99a'} alt={' '}/>
            {props.message}
            <div><span>like {props.likeCount}</span></div>

        </div>
    )
};
