import React, {ChangeEvent, useState} from 'react';
import st from './MyPosts.module.css';

import {useDispatch, useSelector} from 'react-redux';
import {getPostData} from '../p2-bll/profile-selectors';
import {profileActions} from '../p2-bll/profile-reducer';
import {Button, Input} from 'antd';
import Post from './Post/Post';

const {TextArea} = Input;

type PropsPType = {}

export const MyPosts: React.FC<PropsPType> = React.memo(() => {
    const dispatch = useDispatch()
    const postData = useSelector(getPostData)
    const [message, setMessage] = useState('')
    const postsData = [...postData]
        .reverse()
        .map(post => <Post key={post.id} message={post.message} id={post.id} likesCount={post.likesCount}/>);


    const onAddPostANT = () => {
        dispatch(profileActions.addPostAC(message))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }
    // old
    // const onAddPost = useCallback((values: any) => {
    //     dispatch(profileActions.addPostAC(values.newPostText))
    // }, [dispatch]);
    return (
        <div className={st.item}>
            <TextArea rows={4} onChange={onChangeHandler}/>
            <Button onClick={onAddPostANT} type='primary'>Add post</Button>
            {/*old*/}
            {/*<AddNewPostFormRedux onSubmit={onAddPost}/>*/}
            {postsData}
        </div>
    );
})


export default MyPosts;
