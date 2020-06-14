import React from 'react';
import '../../../../App.module.css';
import sta from './Post.module.css'

function Post(props:any) {
    return (
        <div>
            <div className={`${sta.item} ${sta.img}`}>Post
                <img src={'https://www.sunhome.ru/i/wallpapers/91/neitiri-v-avatar.orig.jpg'}/>
                <div>
                    {props.message}
                    <span>Like</span>
                </div>
                <div>
                    <span>Dislike</span>
                </div>
               


            </div>

        </div>

    )

}


export default Post;