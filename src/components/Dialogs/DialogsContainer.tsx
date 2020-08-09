import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from '../../Rdux/dialogs-reducer';
import {ContainersType} from '../MainContant/MyPosts/MyPostsContainer';
import Dialogs from './Dialogs';


function DialogsContainer(props: ContainersType) {

    let state = props.store.getState().dialogsPage;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    const onNewMessageChange = (message: string) => {

        props.store.dispatch(updateNewMessageCreator(message));
    };

    return (<Dialogs
        dialogsPage={state}
        updateNewMessage={onNewMessageChange}
        sendMessage={onSendMessageClick}


    />);
}


export default DialogsContainer;