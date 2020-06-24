import React from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import {DialogPageType} from '../../Rdux/State';
import DialogItem from './DialogItem/DialogItem';


function Dialogs(props: DialogPageType) {

    const dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    const messageElements = props.messageData.map(message => <Message message={message.message} id={message.id}/>);

    return (

        <div className={st.dialogsWrapper}>

            <div className={st.dialogs}>
                {dialogsElements}
            </div>
            <div className={st.messages}>
                {messageElements}
            </div>


        </div>
    );
}


export default Dialogs;