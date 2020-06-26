import React from 'react';
import '../../App.module.css';
import MyPosts, {MyPostsTypeOne} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyPostsType } from '../../Rdux/State';


// export type ProfileTypeOne = {
//     postData: MyPostsTypeOne
//
// }

function Profile(props: MyPostsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     addPostCallBack={props.addPostCallBack}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
            {/*<MyPosts postData={props.myPosts.postData}*/}
            {/*        addPostCallBack={props.myPosts.addPostCallBack}*/}
            {/*        newPostText={props.myPosts.newPostText}*/}
            {/*        updateNewPostText={props.myPosts.updateNewPostText}/>*/}
        </div>
    );

}


export default Profile;