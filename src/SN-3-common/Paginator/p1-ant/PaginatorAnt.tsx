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
    return (
        <div style={style}>
            <Pagination showQuickJumper defaultCurrent={1} total={totalUsersCount}
                        onChange={onPageChanged}
                        current={currentPage}
                        pageSize={pageSize}
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                        pageSizeOptions={['5', '10', '20', '50', '100']}
            />
        </div>


    );

});

export default PaginatorAnt;


