import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div /*className={s.content}*/>
            <div><img src="https://cdn.jpegmini.com/user/images/bullet-1-mobile.jpg" alt="Profile logo"/></div>
            <div>avatar + description</div>
            <MyPosts/>
        </div>
    );
};
