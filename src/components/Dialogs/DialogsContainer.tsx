import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import React from 'react';
import {compose} from 'redux';
import {AppRootStateType} from '../../Rdux/redux-store';
import {dialogsActions} from '../../Rdux/dialogs-reducer';

const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};
// const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
//     return {
//         sendMessage: (newMessageBody: string) => {
//             dispatch(dialogsActions.sendMessage(newMessageBody));
//         },
//     };
// };
export default compose<React.ComponentType>(
    connect(mapStateToProps, {...dialogsActions}),
    // withAuthRedirect
)(Dialogs);



