import React, {useState} from 'react';
import cn from 'classnames'
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
    let portionSize = 10
    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber,setPortionNumber] = useState(Math.floor(props.currentPage/10) + 1);
    let leftPortionPageNumber = (portionNumber-1)*portionSize+1;
    let rightPortionPageNumber =  portionNumber*portionSize;






    return (

        <div className={st.paginator}>
            {portionNumber>1&&
            <button onClick={()=>{setPortionNumber(portionNumber-1)}}>Prev</button>}


            {pages.filter(p=>p>=leftPortionPageNumber&&p<=rightPortionPageNumber)
                .map(p=>{
                    return <span className={cn({[st.selectedPage]:props.currentPage===p},st.pageNumber)}
                                 key={p}
                                 onClick={(e)=>{
                                     props.onPageChanged(p)}}>{p}</span>})}

            {portionCount > portionNumber&&
            <button onClick={()=>{
            setPortionNumber(portionNumber+1)}
            }>NEXT</button>}




            {/*{pages.map((p, i) => {*/}
            {/*    return <span key={i} onClick={(e) => {*/}
            {/*        props.onPageChanged(p);*/}
            {/*    }}*/}
            {/*                 className={props.currentPage === p ? st.selected : st.unselected}>{p}</span>;*/}
            {/*})}*/}

        </div>);
};


export default Paginator;