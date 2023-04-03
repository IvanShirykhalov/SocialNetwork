import React from "react";
import {Profile} from "./Profile";
import {StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/WithAuthRedirectComponent";


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & mapStateToProps & mapDispatchToPropsType

type mapStateToProps = {
    profile: UserProfileType

}


type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}


class ProfileContainer extends React.Component<PropsType, StoreType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

//let AuthRedirectComponent = withAuthRedirectComponent(ProfileContainer)


const MapStateToProps = (state: StoreType): mapStateToProps => ({
    profile: state.profilePage.profile

})
export default withAuthRedirectComponent(connect(MapStateToProps, {getUserProfile})(withRouter(ProfileContainer)))