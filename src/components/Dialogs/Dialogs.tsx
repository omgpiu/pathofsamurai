import React from 'react';
import st from './Dialogs.module.css'
import {v1} from 'uuid';
import Message, {MessageType} from './Message/Message';
import DialogItem, {DialogItemType} from './DialogItem/DialogItem'
import {DialogPageType} from "../../index";





function Dialogs(props: DialogPageType) {

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElements = messageData.map(message => <Message message={message.message} id={message.id}/>)

    return (

        <div className={st.dialogsWrapper}>

            <div className={st.dialogs}>
                {dialogsElements}
            </div>
            <div className={st.messages}>
                {messageElements}
            </div>


        </div>
    )
}


export default Dialogs