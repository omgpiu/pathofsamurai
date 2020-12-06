import React, {ChangeEvent} from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Button} from '@material-ui/core';
import {DialogItemType, DialogsPageType, MessageType} from '../../Types/Types';
import {Field,reduxForm} from 'redux-form';

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
    // const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let message = e.target.value;
    //     updateNewMessage(message);
    // };
    const onNewMessageChange = (message:any) => {

        updateNewMessage(message.newMessageBody);
    };
    return (
        <div className={st.dialogsWrapper}>
            <div className={st.dialogs}>
                {dialogsElements}
            </div>
            <div className={st.messages}>
                {messageElements} </div>

            <AddMessageFormRedux onSubmit={onNewMessageChange}/>


        </div>
    );
};

const AddMessageForm: React.FC<any> = ({onNewMessageChange, newMessageBody, ...props}) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder={'Enter your message'}
                component={'textarea'} name={'newMessageBody'}
            />
            <div><Button
                variant="contained"
                color="primary"
            >
                Send
            </Button></div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({'form':'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;