import React from 'react';
import st from './Dialogs.module.css'
import {v1} from 'uuid';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem'

function Dialogs() {

    let dialogsData = [
        {id: v1(), name: 'Artem'},
        {id: v1(), name: 'Vova'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Masha'},
        {id: v1(), name: 'Egor'}
    ];

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let messageData = [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'My name'},
        {id: v1(), message: 'My name is'},
        {id: v1(), message: 'My name is Sasha'}
    ];

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