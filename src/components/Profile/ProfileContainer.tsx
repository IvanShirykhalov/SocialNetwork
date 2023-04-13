import React from "react";
import {Profile} from "./Profile";
import {StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & mapStateToProps & mapDispatchToPropsType

type mapStateToProps = {
    profile: UserProfileType
    status: string

}


type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (userId: string) => void
}


class ProfileContainer extends React.Component<PropsType, StoreType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '22563'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


const MapStateToProps = (state: StoreType): mapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,

})


// export default withAuthRedirectComponent( compose<FC>(connect(MapStateToProps, {getUserProfile}), withRouter)(ProfileContainer))


export default compose<React.ComponentType>(
    connect(MapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer)