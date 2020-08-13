import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from '../../Rdux/dialogs-reducer';
import {ContainersType} from '../MainContant/MyPosts/MyPostsContainer';
import Dialogs, {DialogsPropType} from './Dialogs';
import {connect} from 'react-redux';
import {ActionType} from '../../Rdux/State';

let mapStateToProps=(state:DialogsPropType)=>{
return {
    dialogsPage:state.dialogsPage
}
}
let mapDispatchToProps =(dispatch: (action: ActionType) => void)=>{
    return{
        updateNewMessage:()=>{
            dispatch(sendMessageCreator());},
        sendMessage:(message: string)=>{
            dispatch(updateNewMessageCreator(message))},
    }

}


export const DialogContainer =connect(mapStateToProps,mapDispatchToProps)(Dialogs);



