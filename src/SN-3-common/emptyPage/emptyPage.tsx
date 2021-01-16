import {Button, Result} from 'antd';
import React from 'react';
import {PROFILE_PATH} from '../routes/Routes';

type PropsType = {}
export const EmptyPage: React.FC<PropsType> = () => {
    return (
        <>
            <Result
                status="403"
                title="Sorry, the page you visited does not exist yet."
                subTitle="We hardly working on it."
                extra={<Button type="primary" href={PROFILE_PATH}>Back to Profile</Button>}
            />
        </>
    )
}