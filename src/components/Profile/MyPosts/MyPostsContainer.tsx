import React from 'react';
import {MyPosts} from "./MyPosts";
import {AddPostAC, changeNewPostTextAC} from "../../../redux/profilePageReducer";
import {StoreContext} from "../../../redux/StoreContext";


export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addPost = () => store.dispatch(AddPostAC())


                    const onChange = (text: string) => {
                        store.dispatch(changeNewPostTextAC(text))
                    }

                    return (
                        <MyPosts posts={store.getState().profilePage.posts}
                                 newPostText={store.getState().profilePage.newPostText}
                                 addPost={addPost}
                                 onChange={onChange}/>
                    )
                }

            }
        </StoreContext.Consumer>
    );
};
