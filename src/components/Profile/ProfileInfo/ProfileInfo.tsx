import React, {ChangeEvent, useState} from 'react';
import PreLoader from '../../common/preLoader/preLoader';
import {NewProfileType} from '../../../Types/Types';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import commonLogo from '../../../photo/commonAvatar.png';
import st from './ProfileData/ProfileData.module.css';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    profile: NewProfileType | null
    saveProfile: (profile: NewProfileType) => Promise<any>
}

// type ProfileTypeKeys = GetStringKeys<PropsType>,


const ProfileInfo: React.FC<PropsType> = ({isOwner, profile, savePhoto, status, updateStatus, saveProfile}) => {
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


    const onSubmit = (profile: NewProfileType) => {
        //todo:remove then
        saveProfile(profile).then(() => {
            setEditMode(false);
        });


    };


    return <div>
        <div>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        </div>
        <img src={profile.photos.large || commonLogo} alt={'ava'} className={st.thisAva}/>

        <ProfileStatus/>
        {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
            <ProfileData profile={profile} isOwner={isOwner} editMode={goToEditMode}/>}

        {/*<ProfileStatusClass status={props.status} updateStatus={props.updateStatus}/>*/}
    </div>;

};


export default ProfileInfo;





