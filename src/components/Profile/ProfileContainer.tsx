import React from "react";
import {Profile} from "./Profile";
import {StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & mapStateToProps & mapDispatchToPropsType

type mapStateToProps = {
    profile: UserProfileType
}

type mapDispatchToPropsType = {
    //setUserProfile: (profile: UserProfileType) => void
    getUserProfile: (userId: string) => void
}


class ProfileContainer extends React.Component<PropsType, StoreType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }

        this.props.getUserProfile(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        //     .then((res) => {
        //         this.props.setUserProfile(res.data)
        //     })

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


export default connect(MapStateToProps, {getUserProfile})(withRouter(ProfileContainer)
)