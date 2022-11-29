import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src="https://cdn.jpegmini.com/user/images/bullet-1-mobile.jpg" alt="Profile logo"/></div>
            <div>avatar + description</div>
            <div>
                My post
                <div>New post</div>
                <div>post 1</div>
                <div>post 2</div>
            </div>

        </div>
    );
};
