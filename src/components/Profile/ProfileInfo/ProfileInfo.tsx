import React from "react";
import s from './ProfileInfo.module.css'





export function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src={'https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png'}/>
            </div>
            <div className={s.descriptionBlock}>ava</div>
        </div>

    )
};
