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
                <img src={'https://cdn-icons.flaticon.com/png/128/4691/premium/4691213.png?token=exp=1644418406~hmac=13c31db1927c47e71e9374b9bf85d99a'} alt={'avatar'}/>
            </div>
        </div>

    )
};
