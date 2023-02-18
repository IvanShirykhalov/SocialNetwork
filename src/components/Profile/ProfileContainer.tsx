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

type PropsType = RouteComponentProps<PathParamsType> & mapStateToProps & mapDispatchToPropsType

type mapStateToProps = {
    profile: UserProfileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}


class ProfileContainer extends React.Component<PropsType, StoreType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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


export default connect(MapStateToProps, {setUserProfile})(withRouter(ProfileContainer)
)