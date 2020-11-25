import React from 'react';
import st from './../Dialogs.module.css'
import {MessageType} from '../../../Types/Types';





const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={st.message}>{props.message}</div>
    )
}


export default Message;