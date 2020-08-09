import React, {ChangeEvent} from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {sendMessageCreator, updateNewMessageCreator} from '../../Rdux/dialogs-reducer';
import {PropsType} from '../../App';
import {Button, TextField} from '@material-ui/core';
import {DialogItemType, MessageType} from '../../Rdux/State';


function Dialogs(props: PropsType) {

    let state = props.store.getState().dialogsPage;
    const dialogsElements = state.dialogsData.map((dialog: DialogItemType) => <DialogItem name={dialog.name}
                                                                                          id={dialog.id}/>);

    const messageElements = state.messageData.map((message: MessageType) => <Message message={message.message}
                                                                                     id={message.id}/>);


    const newMessageBody = state.newMessageText;

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    };


    const onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
            <div>
                <TextField id="outlined-basic" label="Filled" variant="filled" color={'primary'}
                           onChange={onSendMessageChange}
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