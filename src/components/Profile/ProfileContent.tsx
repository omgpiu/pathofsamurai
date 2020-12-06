import React from 'react';
import '../../App.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {NewProfileType} from '../../Types/Types';
import ProfileInfo from './ProfileInfo/ProfileInfo';


type PropsType = {
    profile: NewProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}


function ProfileContent(props: PropsType) {

    return (
        <div>

            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}
                         status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );

}


export default ProfileContent;
