import React, {ChangeEvent} from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Button, TextField} from '@material-ui/core';
import {DialogItemType, DialogsPageType, MessageType} from '../../Rdux/State';
import { Redirect } from 'react-router-dom';

export type DialogsPropType = {
    updateNewMessage: (message: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
    isAuth:boolean
}


function Dialogs(props: DialogsPropType) {

    let state = props.dialogsPage;


    const dialogsElements = state.dialogsData.map((dialog: DialogItemType) => <DialogItem name={dialog.name}
                                                                                          id={dialog.id}
    key={dialog.id}/>);

    const messageElements = state.messageData.map((message: MessageType) => <Message message={message.message}
                                                                                     id={message.id}
    key={message.id}/>);


    const newMessageBody = state.newMessageText;

    const onSendMessageClick = () => {
        props.sendMessage();
    };

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.target.value;
        props.updateNewMessage(message);
    };





    return (

        <div className={st.dialogsWrapper}>

            <div className={st.dialogs}>
                {dialogsElements}
            </div>
            <div className={st.messages}>
                {messageElements} </div>
            <div>
                <TextField id="outlined-basic" label="Filled" variant="filled" color={'primary'}
                           onChange={onNewMessageChange}
                           value={newMessageBody}
                           placeholder={'Enter your message'}/>


            </div>
            <div><Button
                variant="contained"
                color="primary"
                onClick={onSendMessageClick}


            >
                Send
            </Button></div>


        </div>
    );
}


export default Dialogs;