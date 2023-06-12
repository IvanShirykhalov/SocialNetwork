import React from "react";
import s from './ProfileInfo.module.css'
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {UserProfileType} from "../../../redux/profile-reducer";


type PropsType = {
    profile: UserProfileType
}
type ProfileTypeKeys = GetStringKeys<UserProfileType>
const ProfileDataForm: React.FC<InjectedFormProps<UserProfileType, PropsType> & PropsType> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>save</button>
            {props.error &&
                <div className={s.formSummeryError}>
                    {props.error}
                </div>
            }
        </div>
        <div>
            <div><b>My name :</b>{createField('Full name', 'fullName', [], Input)}</div>
            <div><b>About me :</b>{createField('About me', 'aboutMe', [], Textarea)}</div>
            <div>
                <b>Contacts : {Object
                    //@ts-ignore
                    .keys(props.profile.contacts)
                    .map((key) => {
                        return <div key={key} className={s.contact}>
                            <b>{key}: </b>{createField(key, `contacts.${key}`, [], Input)}
                        </div>
                    })}
                </b>
            </div>
            <div><b>Looking for a job :</b> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}</div>
            <div><b>My professional skills:</b> {createField('skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
        </div>
    </form>
}

export const ProfileDataFormReduxForm = reduxForm<UserProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)