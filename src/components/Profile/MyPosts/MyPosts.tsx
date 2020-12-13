import React from 'react';
import '../../../App.module.css';
import st from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../Types/Types';
import {Field, reduxForm} from 'redux-form';

export type MyPostsTypeOne = {
    postData: Array<PostType>
    addPost: (post: any) => void
}


const MyPosts: React.FC<MyPostsTypeOne> = React.memo((props) => {
    const {addPost} = props;

    const postsData = [...props.postData]
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

const AddPostForm: React.FC<any> = ({newPostElement, handleSubmit, ...props}) => {
    return (
        <form onSubmit={handleSubmit}>

            <Field
                placeholder={'Enter your message'}
                component={'textarea'} name={'newPostText'}
            />
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

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddPostForm);

export default MyPosts;
