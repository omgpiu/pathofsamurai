import {sendMessageCreator, updateNewMessageCreator} from '../../Rdux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {ActionType, RootStateType} from '../../Rdux/State';
import React from 'react';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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


export default compose<React.FunctionComponent>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);



