import React, {RefObject} from 'react';
import '../../../App.module.css';
import st from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../Types/Types';

export type MyPostsTypeOne = {
    postData: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}


const MyPosts: React.FC<MyPostsTypeOne> = React.memo((props) => {
    const {addPost, updateNewPostText, newPostText} = props;

    const postsData = [...props.postData]
        .reverse()
        .map(post => <Post key={post.id} message={post.message} id={post.id} likesCount={post.likesCount}/>);


    type  newPostType = RefObject<any>;
    const newPostElement: newPostType = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        addPost();

    };


    const onPostChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);


    };


    return (

        <div className={st.item}> Posts
            <div>New posts</div>
            <textarea className={st.text}
                      onChange={onPostChange}
                      ref={newPostElement}
                      value={newPostText}/>


            <div onClick={onAddPost} className={st.body}>
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
});


export default MyPosts;