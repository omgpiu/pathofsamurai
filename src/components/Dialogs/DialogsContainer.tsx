import Dialogs from './Dialogs';
import React from 'react';
import {AppRootStateType} from '../../Rdux/redux-store';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';

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
// export default compose<React.ComponentType>(withAuthRedirect)(Dialogs);



