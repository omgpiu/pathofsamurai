import React from 'react';
import st from './Post.module.css';
import messageLogo from '../../../../photo/messageLogo-removebg-preview.png'


type PostType = {
    id: string
    message: string
    likesCount: number
}


const Post: React.FC<PostType> = React.memo(({id, message, likesCount}) => {
    return (
        <div className={`${st.wrapper} ${st.wrapper_i}`}>
            <div className={`${st.item} ${st.img}`}>
                <img src={messageLogo} alt={'avatar'}/>
            </div>
            <div key={id} className={`${st.items} ${st.messageBox}`}>
                {message}
            </div>
            <div className={`${st.items} ${st.likes}`}>{likesCount}</div>

        </div>


    );

});


export default Post;
