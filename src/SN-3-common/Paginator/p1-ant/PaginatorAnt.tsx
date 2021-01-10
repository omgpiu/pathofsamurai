import {Pagination} from 'antd';
import React from 'react';

function onChange(pageNumber: any) {
    console.log('Page: ', pageNumber);
}

type PropsType = {
    totalUsersCount?: number
    currentPage?: number
    onPageChanged?: (pageNumber: number) => void
    pageSize?: number
    portionSize?: number
}

export const PaginatorAnt: React.FC<PropsType> = ({totalUsersCount, onPageChanged}) => {
    return (
        <div>
            <Pagination showQuickJumper defaultCurrent={1} total={totalUsersCount} onChange={onPageChanged}/>
        </div>


    )

}


