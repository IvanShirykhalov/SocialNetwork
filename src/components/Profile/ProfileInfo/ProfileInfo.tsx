import React from "react";
import s from './../Profile.module.css'


export function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={s.img}
                     src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/1330px_Rainbow_flag_12_colours_black_bordered.svg/640px-1330px_Rainbow_flag_12_colours_black_bordered.svg.png'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={'https://cdn-icons-png.flaticon.com/128/4600/4600165.png'} alt={'avatar'}/>
            </div>
        </div>

    )
};
