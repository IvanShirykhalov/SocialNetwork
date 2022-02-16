import React, {ChangeEvent} from "react";
import {addPostAC, onPostChangeAC} from "../../../Redux/profileReducer";
import {MyPost} from "./MyPosts";
import {store} from "../../../Redux/redux-store";


/*export function MyPostContainer() {


    return (
        <StateContext.Consumer>
            {(state) => {

                const addPost = () => {
                    console.log(store.getState())
                    store.dispatch(addPostAC(store.getState().profilePage.newTextPost))

                }

                const onPosChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(onPostChangeAC(e.currentTarget.value))
                }


                return (<MyPost addPost={addPost}
                                onPostChange={onPosChange}
                                newTextPost={store.getState().profilePage.newTextPost}
                                profileState={store.getState().profilePage}
                />)
            }
            }
        </StateContext.Consumer>
    )
};*/
