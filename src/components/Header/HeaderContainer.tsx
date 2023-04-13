import React from "react";
import {StoreType} from "../../redux/redux-store";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthDataType, getAuthUserData, logout} from "../../redux/auth-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {}

type MapStateToProps = {
    // id: number | null
    // email: string | null
    // login: string | null
    // isAuth: boolean
    auth: AuthDataType
}

type mapDispatchToPropsType = {
    //setUserData: (data: AuthDataType) => void
    getAuthUserData: () => void
    logout: () => void
}

type HeaderPropsType = MapStateToProps & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & HeaderPropsType

class HeaderContainer extends React.Component<PropsType, StoreType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}


const MapStateToProps = (state: StoreType): MapStateToProps => ({
    auth: state.auth,

})

export default connect(MapStateToProps, {getAuthUserData, logout})(withRouter(HeaderContainer))