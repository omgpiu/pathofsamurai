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


    return (
        <div>

            <div className={st.item} > Posts
                <div>New posts</div>
                <div>
                    <Post message={postData[0].message} id={postData[0].id} likesCount={postData[0].likesCount}/>
                    <Post message={postData[1].message} id={postData[1].id} likesCount={postData[1].likesCount}/>

                </div>

            </div>
        </div>
    )

}


export default MyPosts;