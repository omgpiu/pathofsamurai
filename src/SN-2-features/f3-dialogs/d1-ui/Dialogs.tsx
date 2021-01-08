import React from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {InjectedFormProps, reduxForm} from 'redux-form';

import {useDispatch, useSelector} from 'react-redux';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {getDialogsPage} from '../d2-bll/dialogs-selectors';
import {dialogsActions} from '../d2-bll/dialogs-reducer';
import {createField, Textarea} from '../../../SN-3-common/FormControls/FormControls';
import {withAuthRedirect} from '../../../HOC/WithAuthRedirect';



const maxLength50 = maxLengthCreator(50);

const Dialogs: React.FC<PropsDType> = () => {

    const dispatch = useDispatch()
    const dialogsPag = useSelector(getDialogsPage)


    const dialogsElements = dialogsPag.dialogsData.map(d => <DialogItem name={d.name}
                                                                        id={d.id}
                                                                        key={d.id}/>);

    const messageElements = dialogsPag.messageData.map(m => <Message message={m.message}

                                                                     key={m.id}/>);

    const onNewMessageChange = (values: NewMessageFormValuesType) => {
        dispatch(dialogsActions.sendMessage(values.newMessageBody))
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

export default withAuthRedirect(Dialogs)



type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}
export type NewMessageFormValuesType = {
    newMessageBody: string
}
type PropsDType = {}