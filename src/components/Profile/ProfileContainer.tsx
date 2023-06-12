import React from "react";
import {Profile} from "./Profile";
import {StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    savePhoto,
    saveProfile,
    updateStatus,
    UserProfileType
} from "../../redux/profile-reducer";
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
    userId: string
    isAuth: boolean
}


type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (userId: string) => void
    savePhoto: (photo: File) => void
    saveProfile: (data: UserProfileType) => Promise<any>
}


class ProfileContainer extends React.Component<PropsType, StoreType> {


    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StoreType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
        )
    }
}


const MapStateToProps = (state: StoreType): mapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    //@ts-ignore
    userId: state.auth.id,
    //@ts-ignore
    isAuth: state.auth.isAuth,


})


export default compose<React.ComponentType>(
    connect(MapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer)