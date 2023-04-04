import React from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader";
import avatar from '../../../img/1.png'
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : avatar} alt={'user avatar'}/>
                <ProfileStatus status={props.status}/>

            </div>
        </div>
    );
};
