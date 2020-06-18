import React from 'react';
import st from './../Dialogs.module.css'


type MessageType = {
    message: string
    id: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={st.message}>{props.message}</div>
    )
}


export default Message;