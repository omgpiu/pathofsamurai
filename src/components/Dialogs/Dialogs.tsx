import React from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Button} from '@material-ui/core';
import {DialogItemType, DialogsPageType, MessageType} from '../../Types/Types';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormControls/FormControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';

export type DialogsPropType = {
    sendMessage: (message: string) => void
    dialogsPage: DialogsPageType

}


const Dialogs: React.FC<DialogsPropType> = (props) => {

    const {dialogsPage, sendMessage} = props;


    const dialogsElements = dialogsPage.dialogsData.map((d: DialogItemType) => <DialogItem name={d.name}
                                                                                           id={d.id}
                                                                                           key={d.id}/>);

    const messageElements = dialogsPage.messageData.map((m: MessageType) => <Message message={m.message}
                                                                                     id={m.id}
                                                                                     key={m.id}/>);

    const onNewMessageChange = (message: any) => {
        sendMessage(message.newMessageBody);

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

const maxLength10 = maxLengthCreator(10);
const AddMessageForm: React.FC<any> = ({onNewMessageChange, newMessageBody, handleSubmit, ...props}) => {
    return (
        <form>

            <Field
                placeholder={'Enter your message'}
                component={Textarea} name={'newMessageBody'}
                validate={[required, maxLength10]}

            />
            <div><Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >Send
            </Button></div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
