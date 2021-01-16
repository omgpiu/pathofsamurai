import React, {ChangeEvent, useState} from 'react';
import {NewProfileType} from '../../../Types/Types';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import commonLogo from '../../../photo/commonAvatar.png';
import st from './ProfileData/ProfileData.module.css';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import PreLoader from '../../../SN-3-common/preLoader/preLoader';
import {UploadOutlined} from '@ant-design/icons/lib/icons';
import {Button, Col, Row, Upload} from 'antd';
import {UploadChangeParam} from 'antd/lib/upload/interface';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    profile: NewProfileType | null
    saveProfile: (profile: NewProfileType) => Promise<any>
}

// type ProfileTypeKeys = GetStringKeys<PropsType>,


const ProfileInfo: React.FC<PropsType> = React.memo(({
                                                         isOwner,
                                                         profile,
                                                         savePhoto,
                                                         status,
                                                         updateStatus,
                                                         saveProfile
                                                     }) => {

    // const props = {
    //     name: 'file',
    //     action: '//jsonplaceholder.typicode.com/posts/',
    //     headers: {
    //         authorization: 'authorization-text',
    //     },
    //     onChange(info:any) {
    //         if (info.file.status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (info.file.status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully`);
    //         } else if (info.file.status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    // };
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
    const onMainPhotoSelecte = (fileList: any) => {
        debugger
        savePhoto(fileList)
    };

    const onSubmit = (profile: NewProfileType) => {
        saveProfile(profile).then(() => {
            setEditMode(false);
        });
    };
    const nChange = (info: UploadChangeParam) => {
        savePhoto(info.fileList)
    }

        //TODO FIX THIS SHIT
    const prop = {
        name: 'file',
        action: `https://social-network.samuraijs.com/api/1.0/profile/photo`,
        withCredentials: true,
        headers: {
            'API-KEY': '78abceff-cb7c-4815-8b56-016c67d0625d'
        },
       };


    return <>
        <Row>
            <Col span={12} offset={6}>
                <img src={profile.photos.large || commonLogo} alt={'ava'} className={st.thisAva}/>
            </Col>
            <Col span={12} offset={6}>
                <ProfileStatus isOwner={isOwner}/>
            </Col>
            <Col span={12} offset={6}>
                {isOwner && <Upload {...prop}>
                    <Button>
                        <UploadOutlined/> Click to Upload
                    </Button>
                </Upload>}
            </Col>
        </Row>


        {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
            <ProfileData profile={profile} isOwner={isOwner} editMode={goToEditMode}/>}
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        {/*<ProfileStatusClass status={props.status} updateStatus={props.updateStatus}/>*/}
    </>;

});


export default ProfileInfo;





