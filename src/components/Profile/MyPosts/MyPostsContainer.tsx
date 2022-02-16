import {addPostAC, onPostChangeAC, profilePageType} from "../../../Redux/profileReducer";
import {MyPost} from "./MyPosts";
import {StateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type myPostMapStateToProps = {
    profilePage: profilePageType
}

type myPostsMapDispatchToPropsType = {
    onPostChange: (newPost: string) => void
    addPost: () => void
}

export type MyPostContainerPropsType = myPostMapStateToProps & myPostsMapDispatchToPropsType

const mapStateToProps = (state: StateType): myPostMapStateToProps => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        onPostChange: (newPost: string) => {
            dispatch(onPostChangeAC(newPost))
        },
        addPost: () => {
            dispatch(addPostAC())

        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);