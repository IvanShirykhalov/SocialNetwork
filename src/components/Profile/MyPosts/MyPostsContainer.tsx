import React from 'react';
import {MyPosts} from "./MyPosts";
import {AddPostAC, changeNewPostTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreType} from "../../../redux/redux-store";
import {PostPropsType} from "./Post/Post";

type ProfilePageType = {
    posts: PostPropsType[]
    newPostText: string
}

type mapStateToPropsType = {
    posts: PostPropsType[]
    newPostText: string
}

type mapDispatchToPropsType = {
    addPost: () => void
    onChange: (text: string) => void
}


export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}


const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => dispatch(AddPostAC()),
        onChange: (text: string) => dispatch(changeNewPostTextAC(text)),
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)