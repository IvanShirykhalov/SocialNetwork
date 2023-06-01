import React from 'react';
import s from "../../Users/Users.module.css";


type PaginatorPropsType = {
    slicedPages: number[]
    onPageChanged: (p: number) => void
    currentPage: number

}

export const Paginator = (props: PaginatorPropsType) => {
    return (
        <div>{props.slicedPages.map(p => {
            return <button key={p}
                           onClick={() => {
                               props.onPageChanged(p)
                           }}
                           className={props.currentPage === p ? s.selectedPage : ''}
            >
                {p}
            </button>
        })}
        </div>
    )
};
