import {UserProfileType} from "../../../redux/profile-reducer";
import React from "react";
import {Contact} from "./ProfileInfo";

type ProfileDataPropsType = {
    profile: UserProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData = (props: ProfileDataPropsType) => {



    return <div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div>}
        <div>
            <div><b>My name :</b>{props.profile.fullName}</div>
            <div><b>About me :</b>{props.profile.aboutMe}</div>
            <div>
                <b>Contacts : {Object
                    //@ts-ignore
                    .keys(props.profile.contacts)
                    .map((key) => <Contact key={key}
                                           contactTitle={key}
                                            //@ts-ignore
                                           contactValue={props.profile.contacts[key]}/>)}
                </b>
            </div>
            <div><b>Looking for a job :</b> {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
            {props.profile.lookingForAJob &&
                <div><b>Looking for a job description:</b> {props.profile.lookingForAJobDescription}</div>}
            <div></div>
        </div>
    </div>

}