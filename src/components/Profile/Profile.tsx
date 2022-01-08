import React from "react";
import s from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPosts";


export function Profile() {
    return (
        <div>
            <div>
                <img
                    src={'https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png'}/>
            </div>
            <div>ava</div>
            <MyPost/>
        </div>

    )
};
