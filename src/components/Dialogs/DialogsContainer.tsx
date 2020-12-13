import {dialogsActions, dialogsActionsType} from '../../Rdux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import React, {Dispatch} from 'react';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';
import {AppRootStateType} from '../../Rdux/redux-store';

const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};


const mapDispatchToProps = (dispatch: Dispatch<dialogsActionsType>) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(dialogsActions.sendMessageCreator(newMessageBody));
        },
    };

};


export default compose<React.FunctionComponent>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);



