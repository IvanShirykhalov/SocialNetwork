import React, {useState} from 'react';
import s from "../../Users/Users.module.css";


type PaginatorPropsType = {
    onPageChanged: (p: number) => void
    currentPage: number
    totalUsersCount: number
    pageSize: number
}

export const Paginator = (props: PaginatorPropsType) => {

    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionSize = 10

    const portionCount = Math.ceil(pageCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize


    // let curP = props.currentPage;
    // let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    // let curPL = curP + 5;
    // let slicedPages = pages.slice(curPF, curPL);

    return (
        <div>
            {portionNumber > 1
                ? <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
                : <button disabled>PREV</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <button key={p}
                                   onClick={() => {
                                       props.onPageChanged(p)
                                   }}
                                   className={props.currentPage === p ? s.selectedPage : ''}
                    >
                        {p}
                    </button>
                })}
            {portionCount > portionNumber
                ? <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
                : <button disabled>PREV</button>
            }
        </div>
    )
};
