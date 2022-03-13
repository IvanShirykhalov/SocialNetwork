import React from 'react';
import loading from "../../../img/loading-4.gif"

export const Preloader = () => {
    return (
        <div>
            <img src={loading} style={{width: '640px', height: '593px'}} alt={'loader'}/>
        </div>
    );
};
