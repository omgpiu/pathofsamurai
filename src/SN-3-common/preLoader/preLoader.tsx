import React from 'react';
import st from './preLoader.module.css';


const PreLoader: React.FC = () => {
    return <div className={st.loader}>
        <div className={st.l_main}>
            <div className={st.l_square}><span></span><span></span><span></span></div>
            <div className={st.l_square}><span></span><span></span><span></span></div>
            <div className={st.l_square}><span></span><span></span><span></span></div>
            <div className={st.l_square}><span></span><span></span><span></span></div>

        </div>
    </div>;

};


export default PreLoader;
