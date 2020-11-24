import React, {ChangeEvent, useState} from 'react';
import PreLoader from '../../Users/preLoader';
import {NewProfileType} from '../../../Rdux/Types';
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks';
import commonLogo from '../../../photo/commonAvatar.png';
import st from './ProfileData/ProfileData.module.css';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

type PropsType = {
    profile: NewProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}


const ProfileInfo: React.FC<PropsType> = (props) => {
    const {isOwner, profile, savePhoto, status, updateStatus} = props;
    const [editMode, setEditMode] = useState(false);
    const goToEditMode = () => {
        setEditMode(true);
    };
    if (!profile) {
        return <div><PreLoader/></div>;
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return <div>
        <div>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        </div>
        <img src={profile.photos.large || commonLogo} alt={'ava'} className={st.thisAva}/>

        <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
        {editMode ? <ProfileDataForm profile={profile} isOwner={false}/> :
            <ProfileData profile={profile} isOwner={isOwner} editMode={goToEditMode}/>}

        {/*<ProfileStatusClass status={props.status} updateStatus={props.updateStatus}/>*/}
    </div>;

};


export default ProfileInfo;





