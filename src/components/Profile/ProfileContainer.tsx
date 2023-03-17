import React from "react";
import {Profile} from "./Profile";
import {StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & mapStateToProps & mapDispatchToPropsType

type mapStateToProps = {
    profile: UserProfileType
    isAuth: boolean
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
            this.props.isAuth
                ?
                <Profile profile={this.props.profile}/>
                :
                <Redirect to="/login"/>
        )

    }
}


const MapStateToProps = (state: StoreType): mapStateToProps => ({
    profile: state.profilePage.profile,
    // @ts-ignore
    isAuth: state.auth.isAuth
})


export default connect(MapStateToProps, {getUserProfile})(withRouter(ProfileContainer)
)