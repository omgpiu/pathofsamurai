import {Button, Result} from 'antd';
import React from 'react';
import style from './Page404.module.css'
import {PROFILE_PATH} from '../routes/Routes';


export const Page404: React.FC = () => {

    return <section className={style.pnf}>
        {/*<div className={style.pnf_error}> 404</div>*/}
        {/*<p className={style.pnf_descr}>Sorry, Page not Found...</p>*/}
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" href={PROFILE_PATH}>Back to Profile</Button>}
        />
    </section>
}