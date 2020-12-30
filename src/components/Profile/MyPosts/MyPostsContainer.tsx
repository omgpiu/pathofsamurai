import MyPosts, {DispatchPropsType, MapPropsType} from './MyPosts';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../Rdux/redux-store';
import {profileActions} from '../../../Rdux/profile-reducer';


let mapStateToProps = (state: AppRootStateType) => {
    return {
        postData: state.profilePage.postData,
    };
};

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppRootStateType>(mapStateToProps, {
    addPost: profileActions.addPostActionCreator
})(MyPosts);


export default MyPostsContainer;
