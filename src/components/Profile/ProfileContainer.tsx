import React from "react";
import {ActionsType, StateType} from "../../Redux/redux-store";
import {Store} from "redux";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";


export type postsPropsType = {
    store: Store<StateType, ActionsType>
    newTextPost: string

}

export class ProfileContainerAPI extends React.Component<any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile2`)
            .then(response => {
                    this.props.setUserProfile(response.data)
                }
            )
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
})

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerAPI)