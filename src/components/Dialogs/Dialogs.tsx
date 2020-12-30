import React from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Textarea} from '../common/FormControls/FormControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {InitialStateType} from '../../Rdux/dialogs-reducer';


const maxLength50 = maxLengthCreator(50);

const Dialogs: React.FC<DialogsPropType> = ({dialogsPage, sendMessage}) => {


    const dialogsElements = dialogsPage.dialogsData.map(d => <DialogItem name={d.name}
                                                                         id={d.id}
                                                                         key={d.id}/>);

    const messageElements = dialogsPage.messageData.map(m => <Message message={m.message}
                                                                      id={m.id}
                                                                      key={m.id}/>);

    let onNewMessageChange = (values: NewMessageFormValuesType) => {
        sendMessage(values.newMessageBody);

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


const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (
    props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesKeysType>('Enter your message', 'newMessageBody', [required, maxLength50], Textarea)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm<NewMessageFormValuesType>({form: 'dialog-add-message-form'})(AddMessageForm);

export default Dialogs;
type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}
export type NewMessageFormValuesType = {
    newMessageBody: string
}
export type DialogsPropType = {
    sendMessage: (message: string) => void
    dialogsPage: InitialStateType

}
