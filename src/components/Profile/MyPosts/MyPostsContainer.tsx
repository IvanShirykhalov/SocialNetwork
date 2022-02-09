import React, {ChangeEvent} from "react";
import {postsPropsType} from "../Profile";
import {addPostAC, onPostChangeAC} from "../../../Redux/profileReducer";
import {MyPost} from "./MyPosts";




export function MyPostContainer(props: postsPropsType) {

    const state = props.store.getState()

    const addPost = () => {
        /*props.AddPost(props.newTextPost)*/
        /*props.dispatch({type: "ADD-POST", newTextPost: props.newTextPost})*/
        /*props.store.dispatch(addPostAC(props.newTextPost))*/
        props.store.dispatch(addPostAC(props.newTextPost))

    }

    const onPosChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /*store.ChangeNewText(e.currentTarget.value)*/
        /*props.dispatch({type: "CHANGE-NEW-TEXT", newText: e.currentTarget.value})*/
        /*props.store.dispatch(onPostChangeAC(e.currentTarget.value))*/
        props.store.dispatch(onPostChangeAC(e.currentTarget.value))
    }

    return (
        /*        <div className={s.postsBlock}>
                    {/!*<h3>My Posts</h3>*!/}
                    <div>
                        <div className={s.postsBlock}>
                            <TextField onChange={onPosChange} value={props.newTextPost}/>
                        </div>
                        <div className={s.postsBlock}>
                            <Button onClick={addPost}>Add post</Button>
                        </div>
                    </div>
                    <div className={s.posts}>
                        {props.profileState.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)}
                    </div>
                </div>*/
        <MyPost addPost={addPost}
                onPostChange={onPosChange}
                newTextPost={props.newTextPost}
                profileState={state.profilePage}
                /*newTextPost={props.dialogsPage.newMessageText}*/
                /*profileState={props.profileState}*/

        />
    )
};
