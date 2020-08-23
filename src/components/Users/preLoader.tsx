import React from 'react';
import st from './preLoader.module.css'


const PreLoader = ()=>{
    return  <div className={st.preloader}>
        <div className={st.spinner}></div>
    </div>

}


export default PreLoader