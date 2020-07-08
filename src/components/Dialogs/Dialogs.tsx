import React from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {

    DialogsPageType,

    sendMessageCreator, updateNewMessageCreator
} from '../../Rdux/State';
import Post from "../MainContant/MyPosts/Post/Post";


function Dialogs(props: DialogsPageType) {

    const dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    const messageElements = props.messageData.map(message => <Message message={message.message} id={message.id}/>);


    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    };


    const onSendMessageChange = () => {
        if (newMessageElement.current) {

            const text = newMessageElement.current.value;
            let action = updateNewMessageCreator(text);
            props.dispatch(action);

        }

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
                ref={newMessageElement}
                value={props.d}
                placeholder={'Enter your message'}

            ></textarea></div>
            <div><button onClick={ onSendMessageClick}></button></div>








        </div>
    );
}


export default Dialogs;