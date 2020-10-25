
import {sendMessageCreator, updateNewMessageCreator} from '../../Rdux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {ActionType, RootStateType} from '../../Rdux/State';
import {Redirect} from 'react-router-dom';
import React from 'react';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';
import {MapStatePropsForRedirectType, RootProfileType} from '../Profile/ProfileContentContainerAPI';

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    };
};




const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessage: (message: string) => {
            dispatch(updateNewMessageCreator(message));
        },
    };

};

let AuthRedirectComponent=withAuthRedirect(Dialogs)




const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogContainer;



