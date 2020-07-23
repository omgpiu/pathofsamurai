import React from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsPageType} from '../../Rdux/State';
import {sendMessageCreator, updateNewMessageCreator} from '../../Rdux/dialogs-reducer';


function Dialogs(props: DialogsPageType) {

    const dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    const messageElements = props.messageData.map(message => <Message message={message.message} id={message.id}/>);


    const newMessageBody = props.newMessageText;

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    };


    const onSendMessageChange = (e: any) => {
        let message = e.target.value;
        props.dispatch(updateNewMessageCreator(message));
    };


    return (

        <div className={st.dialogsWrapper}>

            <div className={st.dialogs}>
                {dialogsElements}
            </div>
            <div className={st.messages}>
                {messageElements} </div>

            <div><textarea
                onChange={onSendMessageChange}
                value={newMessageBody}
                placeholder={'Enter your message'}
            ></textarea></div>
            <div>
                <button onClick={onSendMessageClick}></button>
            </div>


        </div>
    );
}


export default Dialogs;