import React from 'react';
import '../../../../App.module.css';
import st from './Post.module.css';


export type PostTypeOne = {
    id: string
    message: string
    likesCount: number

}


const Post: React.FC<PostTypeOne> = (props) => {
    return (
        <div className={`${st.wrapper} ${st.wrapper_i}`}>

            <div className={`${st.item} ${st.img}`}>
                <img src={'https://www.sunhome.ru/i/wallpapers/91/neitiri-v-avatar.orig.jpg'} alt={'avatar'}/>
            </div>

            <div className={`${st.items} ${st.messageBox}`}>
                {props.message}
            </div>
            <div className={`${st.items} ${st.buttonsBlock}`}>

                <div className={st.body}>
                    <div className={st.button}>
                        <span className={`${st.button_line} ${st.button_line_top}`}></span>
                        <span className={`${st.button_line} ${st.button_line_right}`}></span>
                        <span className={`${st.button_line} ${st.button_line_bottom}`}></span>
                        <span className={`${st.button_line} ${st.button_line_left}`}></span>
                        Like
                    </div>
                </div>


            </div>
            <div className={`${st.items} ${st.likes}`}>{props.likesCount}</div>

        </div>


    );

};


export default Post;