import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../Rdux/redux-store';
import {profileActions, profileActionsType} from '../../../Rdux/profile-reducer';


let mapStateToProps = (state: AppRootStateType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    };
};
let mapDispatchToProps = (dispatch: (action: profileActionsType) => void) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(profileActions.updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(profileActions.addPostActionCreator());

        },
    };

};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;