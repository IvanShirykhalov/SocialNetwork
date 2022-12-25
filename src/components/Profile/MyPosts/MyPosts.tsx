import React, {useRef} from 'react';
import {Post, PostPropsType} from "./Post/Post";
import s from './MyPosts.module.css'
import {ActionType} from "../../../redux/state";

export type MyPostPropsType = {
    posts: PostPropsType[]

    newPostText: string
    dispatch: (action: ActionType) => void
    /*    addPost: (message: string) => void
        changeNewPostText: (newPostText: string) => void*/
}

export const MyPosts = (props: MyPostPropsType) => {


    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current !== null) {
            //props.dispatch.addPost(newPostElement.current.value)
            props.dispatch({type: 'ADD-POST'})
        }
    }

    const onChange = () => {
        if (newPostElement.current !== null) {
            //props.changeNewPostText(newPostElement.current.value)
            props.dispatch({type: 'CHANGE-NEW-POST-TEXT', newPostText: newPostElement.current.value})
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>New post</div>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)}

        </div>
    );
};
