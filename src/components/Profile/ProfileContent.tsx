import React from 'react';
import '../../App.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {MapStatePropsType} from './ProfileContentContainerAPI';


type PropsType = MapStatePropsType & { updateStatus: (status: string) => void }


function ProfileContent(props: PropsType) {

    return (
        <div>

            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );

}


export default ProfileContent;