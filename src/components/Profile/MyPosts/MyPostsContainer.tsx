import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";
import {PostPropsType} from "./Post/Post";

type ProfilePageType = {
    posts: PostPropsType[]
    newPostText: string
}

type mapStateToPropsType = {
    posts: PostPropsType[]
}

type mapDispatchToPropsType = {
    addPost: (value: string) => void
}


export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}


export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)