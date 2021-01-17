import React from 'react';
import st from './Post.module.css';
import messageLogo from '../../../../photo/messageLogo-removebg-preview.png'
import {Col, Row} from 'antd';


type PostType = {
    id: string
    message: string
    likesCount: number
}


const Post: React.FC<PostType> = React.memo(({id, message, likesCount}) => {
    return (
            <Row style={{border: '1px solid black'}}>
                <Col flex={1} className={`${st.item} ${st.img}`}><img src={messageLogo} alt={'avatar'}/></Col>
                <Col flex={3}>{message}</Col>
                <Col flex={3}>{likesCount}</Col>
            </Row>
    );
});


export default Post;
