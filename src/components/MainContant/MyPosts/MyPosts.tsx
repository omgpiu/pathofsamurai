import React from 'react';
import '../../../App.module.css';
import st from './MyPosts.module.css'
import Post from "./Post/Post";
import {v1} from "uuid";



function MyPosts() {

    let postData = [
        {id: v1(), message: 'Hello man', likesCount:12},
        {id: v1(), message: 'Hello woman', likesCount:10}
    ]

    let postsData = postData.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>)



    return (
        <div>

            <div className={st.item} > Posts
                <div>New posts</div>
                <div>
                    {postsData}

                </div>

            </div>
        </div>
    )

}


export default MyPosts;