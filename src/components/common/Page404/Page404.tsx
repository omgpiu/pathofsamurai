import React from 'react';
import style from './Page404.module.css'


export const Page404: React.FC = () => {

    return <section className={style.pnf}>
        <div className={style.pnf_error}> 404</div>
        <p className={style.pnf_descr}>Sorry, Page not Found...</p>
    </section>
}