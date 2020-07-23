import React, {ChangeEvent} from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {sendMessageCreator, updateNewMessageCreator} from '../../Rdux/dialogs-reducer';
import {PropsType} from '../../App';


function Dialogs(props: PropsType) {

    let state = props.store.getState().dialogsPage;
    const dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    const messageElements = state.messageData.map(message => <Message message={message.message} id={message.id}/>);


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

            <div><textarea
                onChange={onSendMessageChange}
                value={newMessageBody}
                placeholder={'Enter your message'}
            /></div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>


        </div>
    );
}


export default Dialogs;