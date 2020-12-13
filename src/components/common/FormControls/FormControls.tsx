import React from 'react';
import st from './FormControls.module.css';


export const Textarea: React.FC<any> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    // <div className={`${st.formControl} ${st.error}`}>
    return <div className={st.formControl + ' ' + (hasError ? st.error : '')}>
        <div>
            <textarea {...props} {...input}/>
        </div>
        {hasError && <span>{meta.error}</span>}

    </div>;
};
