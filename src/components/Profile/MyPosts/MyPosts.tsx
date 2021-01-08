import React, {useCallback} from 'react';
import '../../../App.css';
import st from './MyPosts.module.css';
import Post from './Post/Post';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {createField, GetStringKeys, MyInput} from '../../common/FormControls/FormControls';
import {useDispatch, useSelector} from 'react-redux';
import {getPostData} from '../../../Rdux/profile-selectors';
import {profileActions} from '../../../Rdux/profile-reducer';

type PropsPType = {}

export const MyPosts: React.FC<PropsPType> = React.memo(() => {

    const dispatch = useDispatch()
    const postData = useSelector(getPostData)


    const postsData = [...postData]
        .reverse()
        .map(post => <Post key={post.id} message={post.message} id={post.id} likesCount={post.likesCount}/>);

    const onAddPost = useCallback((values: any) => {
        dispatch(profileActions.addPostAC(values.newPostText))
    }, [dispatch]);


    return (
        <div className={st.item}> Posts
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            {postsData}
        </div>
    );
});

const maxLength = maxLengthCreator(30);
type AddPostFormValuesType = {
    newPostText: string
}
type PropsType = {}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = ({

                                                                                                    handleSubmit,
                                                                                                    ...props
                                                                                                }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<GetStringKeys<AddPostFormValuesType>>('Your post', 'newPostText', [required, maxLength], MyInput)}
            <div onClick={handleSubmit} className={st.body}>
                <div className={st.button}>
                    <span className={`${st.button_line} ${st.button_line_top}`}></span>
                    <span className={`${st.button_line} ${st.button_line_right}`}></span>
                    <span className={`${st.button_line} ${st.button_line_bottom}`}></span>
                    <span className={`${st.button_line} ${st.button_line_left}`}></span>
                    Add Me
                </div>
            </div>
        </form>
    );
};

const AddNewPostFormRedux = reduxForm<AddPostFormValuesType, PropsType>({form: 'ProfileAddNewPostForm'})(AddPostForm);

export default MyPosts;
