import React, {ChangeEvent} from 'react';
import st from './ProfileInfo.module.css';
import {ProfileType} from '../../../Rdux/profile-reducer';
import PreLoader from '../../Users/preLoader';
import commonLogo from '../../../photo/commonAvatar.png';
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks';


function ProfileInfo(props: PropsType) {

    if (!props.profile) {
        return <div><PreLoader/></div>;
    }

    // const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files.length) {
    //         props.savePhoto(e.target.files[0]);
    //     }
    //
    //
    // };
    const onMainPhotoSelected = (e: any) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={st.description}>
                <img src={props.profile.photos.large || commonLogo} alt={'ava'} className={st.thisAva}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}


export default ProfileInfo;
type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
}
