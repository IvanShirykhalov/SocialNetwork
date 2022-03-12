import React from "react";
import s from './../Profile.module.css'
import {postsPropsType} from "../Profile";


export function ProfileInfo(props: postsPropsType) {
    return (
        <div>
            <div>
                <img className={s.img}
                     src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Classic_Rainbow_Flag.png/500px-Classic_Rainbow_Flag.png'}
                     alt={'img'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src={'https://cdn-icons.flaticon.com/png/128/4691/premium/4691213.png?token=exp=1644418406~hmac=13c31db1927c47e71e9374b9bf85d99a'}
                    alt={'avatar'}/>
            </div>
        </div>

    )
};
