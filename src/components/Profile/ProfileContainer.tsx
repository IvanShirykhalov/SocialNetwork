import React from "react";
import {StateType} from "../../Redux/redux-store";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import {useMatch} from "react-router-dom";
import {profileAPI} from "../../api/api";


type ProfilePhotosType = {
    small: string | null
    large: string | null
}
type ProfileContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type ProfilePropsType = {
    aboutMe: string | null
    contacts: ProfileContactsType,
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotosType
} | null

export class ProfileContainerAPI extends React.Component<any> {

    componentDidMount() {

        const userId = (this.props.match) ? this.props.match.params.userId : 2;
        profileAPI.getProfile(userId).then(data => {
                    this.props.setUserProfile(data)
                }
            )
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}


const mapStateToProps = (state: StateType): { profile: ProfilePropsType } => ({
    profile: state.profilePage.profile
})


const ProfileMatch = (props: any) => {
    let match = useMatch("/profile/:userId/");
    return (
        <ProfileContainerAPI {...props} match={match}/>
    )
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileMatch)