import React from "react";
import {StoreType} from "../../redux/redux-store";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthDataType, setUserData} from "../../redux/auth-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {}

type MapStateToProps = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type mapDispatchToPropsType = {
    setUserData: (data: AuthDataType) => void
}

type HeaderPropsType = MapStateToProps & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & HeaderPropsType

class HeaderContainer extends React.Component<PropsType, StoreType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((res) => {
                if (res.data.resultCode === 0) {
                    //const {userId, login, email} = res.data.data
                    this.props.setUserData(res.data.data)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const MapStateToProps = (state: StoreType): MapStateToProps => ({
    id: state.auth.id,
    isAuth: state.auth.isAuth,
    email: state.auth.email,
    login: state.auth.login,
})

export default connect(MapStateToProps, {setUserData})(withRouter(HeaderContainer))