import React from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader";


type ProfileInfoPropsType = {
    profile: UserProfileType
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div><img src="https://cdn.jpegmini.com/user/images/bullet-1-mobile.jpg" alt="Profile logo"/></div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'user avatar'}/>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
};
