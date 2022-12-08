import React from 'react';
import s from './Post.module.css'

export type PostPropsType = {
    id: string
    message: string
    likeCount: number

}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}><img
            src="https://us.123rf.com/450wm/yupiramos/yupiramos1709/yupiramos170900442/85024718-engineer-avatar-.jpg?ver=6"
            alt="Logo"/>
            {props.message}
            <div className={s.like}>
                <span>like </span>
                {props.likeCount}
            </div>
        </div>
    );
};
