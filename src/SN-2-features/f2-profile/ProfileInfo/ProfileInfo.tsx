import React, {useEffect, useState} from 'react';
import {NewProfileType} from '../../../Types/Types';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import commonLogo from '../../../photo/commonAvatar.png';
import st from './ProfileData/ProfileData.module.css';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import PreLoader from '../../../SN-3-common/preLoader/preLoader';
import {UploadOutlined} from '@ant-design/icons/lib/icons';
import {Button, Col, Row, Upload} from 'antd';
import {UploadRequestOption as RcCustomRequestOptions} from 'rc-upload/lib/interface';
import {UploadChangeParam} from 'antd/es/upload';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => Promise<any>
    profile: NewProfileType | null
    saveProfile: (profile: NewProfileType) => Promise<any>
}


const ProfileInfo: React.FC<PropsType> = React.memo(({
                                                         isOwner,
                                                         profile,
                                                         savePhoto,
                                                         status,
                                                         updateStatus,
                                                         saveProfile
                                                     }) => {
    const [editMode, setEditMode] = useState(false);

    const prop = {
        onChange(info: UploadChangeParam) {
            info.file.status = 'done'
        },
    };
    const goToEditMode = () => {
        setEditMode(true);
    };
    if (!profile) {
        return <div><PreLoader/></div>;
    }
    const onMainPhotoSelected = (value: RcCustomRequestOptions) => {
        savePhoto(value.file)
    };
    const onSubmit = (profile: NewProfileType) => {
        saveProfile(profile).then(() => {
            setEditMode(false);
        });
    };


    //old variant
    // const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files.length) {
    //         savePhoto(e.target.files[0]);
    //     }
    // };
    return <>
        <Row>
            <Col span={12} offset={12}>
                <img src={profile.photos.large || commonLogo} alt={'ava'} className={st.thisAva}/>
            </Col>
            <Col span={12} offset={12}>
                <ProfileStatus isOwner={isOwner}/>
            </Col>
            <Col span={12} offset={12}>
                {isOwner && <Upload customRequest={onMainPhotoSelected} {...prop} >
                    <Button type='primary'>
                        <UploadOutlined/> Change photo
                    </Button>
                </Upload>}
            </Col>
        </Row>


        {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
            <ProfileData profile={profile} isOwner={isOwner} editMode={goToEditMode}/>}


        {/*old variant*/}
        {/*{isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}*/}
        {/*<ProfileStatusClass status={props.status} updateStatus={props.updateStatus}/>*/}
    </>;

});


export default ProfileInfo;





