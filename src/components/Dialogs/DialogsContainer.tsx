
import {sendMessageCreator, updateNewMessageCreator} from '../../Rdux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {ActionType, RootStateType} from '../../Rdux/State';

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    };
};
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessage: (message: string) => {
            dispatch(updateNewMessageCreator(message));
        },
    };

};


const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogContainer;



