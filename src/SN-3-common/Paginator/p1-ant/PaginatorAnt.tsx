import {Pagination} from 'antd';
import React, {CSSProperties} from 'react';


type PropsType = {
    totalUsersCount?: number
    currentPage?: number
    onPageChanged: (page: number, pageSize?: number) => void
    pageSize: number | undefined
    portionSize?: number
    style: CSSProperties

}


const PaginatorAnt: React.FC<PropsType> = React.memo(({
                                                          totalUsersCount,
                                                          onPageChanged,
                                                          currentPage,
                                                          pageSize,
                                                          style
                                                      }) => {
    console.log('paginator');
    return (
        <div style={style}>
            <Pagination showQuickJumper defaultCurrent={1} total={totalUsersCount}
                        onChange={onPageChanged}
                        current={currentPage}
                        pageSize={pageSize}
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}


            />
        </div>


    );

});

export default PaginatorAnt;


