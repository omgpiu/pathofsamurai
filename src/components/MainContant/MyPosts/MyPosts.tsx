import React from 'react';
import '../../../App.module.css';
import st from './MyPosts.module.css';
import Post from './Post/Post';
import {DispatchType, PostType} from '../../../Rdux/State';

export type MyPostsTypeOne = {
    postData: Array<PostType>
    newPostText: string
    dispatch: (action:DispatchType) => void
}

function MyPosts(props: MyPostsTypeOne) {


    const postsData = props.postData
        .map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>);


    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch({type: 'ADD-POST' });
    };


    const onPostChange = () => {
        if (newPostElement.current) {

            const text = newPostElement.current.value;
            let action = {type:'UPDATE-NEW-POST-TEXT', newText: text};
            props.dispatch(action);

        }

    };


    return (

        <div className={st.item}> Posts
            <div>New posts</div>
            <textarea className={st.text}
                      onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText}/>


            <div onClick={addPost} className={st.body}>
                <div className={st.button}>
                    <span className={`${st.button_line} ${st.button_line_top}`}></span>
                    <span className={`${st.button_line} ${st.button_line_right}`}></span>
                    <span className={`${st.button_line} ${st.button_line_bottom}`}></span>
                    <span className={`${st.button_line} ${st.button_line_left}`}></span>

                    Add Me
                </div>


            </div>

            <div>
                {postsData}

            </div>

        </div>

    );

}


export default MyPosts;