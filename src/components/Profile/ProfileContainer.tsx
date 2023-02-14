import React from "react";
import {Profile} from "./Profile";
import {StoreType} from "../../redux/redux-store";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & UserProfilePropsType

type mapStateToProps = {
    profile: UserProfileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

export type UserProfilePropsType = mapStateToProps & mapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType, StoreType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
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

const WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(MapStateToProps, {setUserProfile})(WithRouterProfileContainer)