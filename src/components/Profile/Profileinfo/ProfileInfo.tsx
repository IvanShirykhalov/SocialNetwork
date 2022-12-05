import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div><img src="https://cdn.jpegmini.com/user/images/bullet-1-mobile.jpg" alt="Profile logo"/></div>
            <div className={s.descriptionBlock}>avatar + description</div>
        </div>
    );
};
