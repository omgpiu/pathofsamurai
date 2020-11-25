import React, {ChangeEvent} from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Button, TextField} from '@material-ui/core';
import {DialogItemType, DialogsPageType, MessageType} from '../../Types/Types';

export type DialogsPropType = {
    updateNewMessage: (message: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType

}


const Dialogs: React.FC<DialogsPropType> = (props) => {

    const {dialogsPage, sendMessage, updateNewMessage} = props;


    const dialogsElements = dialogsPage.dialogsData.map((d: DialogItemType) => <DialogItem name={d.name}
                                                                                           id={d.id}
                                                                                           key={d.id}/>);

    const messageElements = dialogsPage.messageData.map((m: MessageType) => <Message message={m.message}
                                                                                     id={m.id}
                                                                                     key={m.id}/>);
    const newMessageBody = dialogsPage.newMessageText;
    const onSendMessageClick = () => {
        sendMessage();
    };
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.target.value;
        updateNewMessage(message);
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
};


export default Dialogs;