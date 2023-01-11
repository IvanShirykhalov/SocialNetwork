import React, {ChangeEvent} from 'react';
import {MyPosts} from "./MyPosts";
import {PostPropsType} from "./Post/Post";
import {ActionType, StoreType} from "../../../redux/store";
import {AddPostAC, changeNewPostTextAC} from "../../../redux/profilePageReducer";
import {store} from "../../../redux/redux-store";
import {StoreContext} from "../../../redux/StoreContext";


/*export type MyPostContainerPropsType = {
    /!*    profilePage: {
            posts: PostPropsType[]
            newPostText: string
        }
        dispatch: (action: ActionType) => void*!/
    store: StoreType
}*/

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addPost = () => store.dispatch(AddPostAC())

                    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => store.dispatch(changeNewPostTextAC(e.currentTarget.value))

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
