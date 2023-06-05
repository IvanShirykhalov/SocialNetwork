import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader";
import avatar from '../../../img/1.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}
export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto} src={props.profile.photos.large ? props.profile.photos.large : avatar}
                     alt={'user avatar'}/>
                <div>
                    {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

            </div>
        </div>
    );
})
