import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader";
import avatar from '../../../img/1.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileData} from "./ProfileData";
import {ProfileDataFormReduxForm} from "./ProfileDataForm";
import {LoginFormDataType} from "../../Login/LoginForm";


type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (formData: UserProfileType) => void
}
export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: any) => {
        props.saveProfile(formData)
        setEditMode(false)
    }


    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto} src={props.profile.photos.large ? props.profile.photos.large : avatar}
                     alt={'user avatar'}/>
                <div>
                    {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>
                {editMode
                    ? <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={props.profile}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner}
                                   goToEditMode={() => setEditMode(true)}/>
                }

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

            </div>
        </div>
    );
})


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact = (props: ContactPropsType) => {
    return <div className={s.contact}><b>{props.contactTitle}</b>: {props.contactValue}</div>
}