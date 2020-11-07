import React from 'react';

import st from './Paginator.module.css';


export type PropsPaginatorType = {
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    pageSize:number


}

const Paginator = (props: PropsPaginatorType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (

        <div>
            {pages.map((p, i) => {
                return <span key={i} onClick={(e) => {
                    props.onPageChanged(p);
                }}
                             className={props.currentPage === p ? st.selected : st.unselected}>{p}</span>;
            })}

        </div>);
};


export default Paginator;