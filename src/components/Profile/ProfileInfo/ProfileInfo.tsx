import React from "react";
import s from './../Profile.module.css'
import {postsPropsType} from "../Profile";
import authorImg from "../../../img/1.png";


export function ProfileInfo(props: postsPropsType) {
    return (
        <div>
            <div>
                <img className={s.img}
                     src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Classic_Rainbow_Flag.png/500px-Classic_Rainbow_Flag.png'}
                     alt={'img'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large || authorImg} alt="user photo"
                     style={{width: '101px', height: '101px'}}/>

            </div>
        </div>

    )
};
