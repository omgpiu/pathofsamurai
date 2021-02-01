import st from './LocalBtn.module.css';
import React from 'react';


export const LocalBtn = () => {
    return (
        <div className={st.body}>
            <div className={st.button}>
                <span className={`${st.button_line} ${st.button_line_top}`}></span>
                <span className={`${st.button_line} ${st.button_line_right}`}></span>
                <span className={`${st.button_line} ${st.button_line_bottom}`}></span>
                <span className={`${st.button_line} ${st.button_line_left}`}></span>
                Add Me
            </div>
        </div>
    )
}