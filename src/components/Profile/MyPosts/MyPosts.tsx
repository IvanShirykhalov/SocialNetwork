import React from "react";
import s from './../Profile.module.css'
import {Post} from "./Post/Post";
import {postsPropsType} from "../../../Redux/State";




export function MyPost(props: postsPropsType) {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        alert(newPostElement.current?.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div className={s.postsBlock}>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div className={s.postsBlock}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.profileState.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)}
            </div>
        </div>
    )
};
