import React, {useCallback} from 'react';
import st from './MyPosts.module.css';
import Post from './Post/Post';
import {useDispatch, useSelector} from 'react-redux';
import {getPostData} from '../p2-bll/profile-selectors';
import {profileActions} from '../p2-bll/profile-reducer';
import {AddNewPostFormRedux} from '../../../SN-3-common/FormControls/AddNewPostForm/AddNEwPostFormRedux';

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
})


export default MyPosts;
