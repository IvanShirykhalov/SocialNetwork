import React from "react";
import {Profile} from "./Profile";
import {StoreType} from "../../redux/redux-store";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";


type mapStateToProps = {
    profile: UserProfileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

export type UserProfilePropsType = mapStateToProps & mapDispatchToPropsType
class ProfileContainer extends React.Component<UserProfilePropsType, StoreType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                this.props.setUserProfile(res.data)
            })

    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}


const MapStateToProps = (state: StoreType) => ({
    profile: state.profilePage.profile
})

export default connect(MapStateToProps, {setUserProfile})(ProfileContainer)