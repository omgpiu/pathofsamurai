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

export const PaginatorAnt: React.FC<PropsType> = ({totalUsersCount, onPageChanged, currentPage, pageSize}) => {


    return (
        <>
            <Pagination showQuickJumper defaultCurrent={1} defaultPageSize={pageSize} total={totalUsersCount}
                        onChange={onPageChanged}
                        current={currentPage}/>
        </>


    )

};


