import React, {ChangeEvent} from "react";
import {addPostAC, onPostChangeAC, profilePageType} from "../../../Redux/profileReducer";
import {MyPost} from "./MyPosts";
import {StateType, store} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


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
            console.log('addPost')
            dispatch(addPostAC())

        }
    }

}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);