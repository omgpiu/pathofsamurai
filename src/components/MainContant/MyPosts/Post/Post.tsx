import React from 'react';
import '../../../../App.module.css';
import st from './Post.module.css'
import {PostType} from "../../../../index";





const  Post: React.FC<PostType> = (props) => {
    return (
        <div className={st.wrapper}>
            <div className={`${st.item} ${st.img}`}>
                <img src={'https://www.sunhome.ru/i/wallpapers/91/neitiri-v-avatar.orig.jpg'}/>
                <div>
                    {props.message}
                    <div><span>Like</span> <span>{props.likesCount}</span></div>
                </div>


               


            </div>

        </div>

    )

}


export default Post;