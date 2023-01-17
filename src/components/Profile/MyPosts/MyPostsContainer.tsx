import React from 'react';
import {MyPosts} from "./MyPosts";
import {AddPostAC, changeNewPostTextAC} from "../../../redux/profilePageReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreType} from "../../../redux/redux-store";


const mapStateToProps = (state: StoreType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(AddPostAC())
        },
        onChange: (text: string) => {
            dispatch(changeNewPostTextAC(text))
        },
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)