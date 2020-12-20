import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../Rdux/redux-store';
import {ActionsType, profileActions} from '../../../Rdux/profile-reducer';


let mapStateToProps = (state: AppRootStateType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    };
};
let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {

        addPost: (post: any) => {
            dispatch(profileActions.addPostActionCreator(post));

        },
    };

};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
