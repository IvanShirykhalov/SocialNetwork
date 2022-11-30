import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    post: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}><img
            src="https://us.123rf.com/450wm/yupiramos/yupiramos1709/yupiramos170900442/85024718-engineer-avatar-.jpg?ver=6"
            alt="Logo"/>
            {props.post}
            <span className={s.like}> like</span>
        </div>
    );
};
