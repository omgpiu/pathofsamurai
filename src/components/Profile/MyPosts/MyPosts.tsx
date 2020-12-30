import React from 'react';
import '../../../App.module.css';
import st from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../Types/Types';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {createField, GetStringKeys, MyInput} from '../../common/FormControls/FormControls';

export type MyPostsTypeOne = {
    postData: Array<PostType>
    addPost: (newPostText: string) => void
}


const MyPosts: React.FC<MyPostsTypeOne> = React.memo(({addPost, ...rest}) => {

    const postsData = [...rest.postData]
        .reverse()
        .map(post => <Post key={post.id} message={post.message} id={post.id} likesCount={post.likesCount}/>);

    const onAddPost = (values: any) => {
        addPost(values.newPostText);

    };


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
