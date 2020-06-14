import React from 'react';
import '../../../App.module.css';
import one from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>

            <div className={one.item} > Posts
                <div>New posts</div>
                <div>
                    <Post message='How are you?'/>
                    <Post message='Hello man'/>

                </div>

            </div>
        </div>
    )

}


export default MyPosts;