import React from "react";
import {StoreType} from "../../redux/redux-store";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthDataType, logout} from "../../redux/auth-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {}

type MapStateToProps = {
    auth: AuthDataType
}

type mapDispatchToPropsType = {
    //setUserData: (data: AuthDataType) => void
    logout: () => void
}

type HeaderPropsType = MapStateToProps & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & HeaderPropsType

class HeaderContainer extends React.Component<PropsType, StoreType> {



    render() {
        return (
            <Header {...this.props}/>
        )
    }
}


const MapStateToProps = (state: StoreType): MapStateToProps => ({
    auth: state.auth,

})

export default connect(MapStateToProps, {logout})(withRouter(HeaderContainer))