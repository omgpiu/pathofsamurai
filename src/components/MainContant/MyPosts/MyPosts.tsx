import React from 'react';
import '../../../App.module.css';
import st from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from '../../../Rdux/State';





function MyPosts(props: ProfilePageType) {


    let postsData = props.postData
        .map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>)


    return (
        <div>

            <div className={st.item}> Posts
                <div>New posts</div>
                <div>
                    {postsData}

                </div>

            </div>
        </div>
    )

}


export default MyPosts;