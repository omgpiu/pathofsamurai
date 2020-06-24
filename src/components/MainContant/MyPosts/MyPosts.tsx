import React from 'react';
import '../../../App.module.css';
import st from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsType} from '../../../Rdux/State';





function MyPosts(props: MyPostsType) {


    let postsData = props.postData
        .map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>);


    let newPostElementRef = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        if (newPostElementRef.current) {
            props.addPostCallBack(newPostElementRef.current.value);
            newPostElementRef.current.value='';
        }
    };


    return (

        <div className={st.item}> Posts
                <div>New posts</div>
                <textarea className={st.text} ref={newPostElementRef}></textarea>


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