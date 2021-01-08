import React from 'react';
import st from './../Dialogs.module.css';

type PropsType = {
    message: string
}
const Message: React.FC<PropsType> = ({message}) => {
    return (
        <div className={st.message}>{message}</div>
    );
};


export default Message;
