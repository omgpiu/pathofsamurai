import React, {useState} from 'react';
import {NewProfileType} from '../../../Types/Types';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import commonLogo from '../../../photo/commonAvatar.png';
import st from './ProfileData/ProfileData.module.css';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import PreLoader from '../../../SN-3-common/preLoader/preLoader';
import {Button, Col, Row, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons/lib/icons';
import {UploadChangeParam} from 'antd/es/upload';
import {UploadFile} from 'antd/es/upload/interface';
import {RcFile} from 'antd/lib/upload/interface';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
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

    // const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files.length) {
    //         savePhoto(e.target.files[0]);
    //     }
    // };
    // const onMainPhotoSelected = ( fileList:any ) => {
    //     debugger
    //     savePhoto(file)
    // };

    const onSubmit = (profile: NewProfileType) => {
        saveProfile(profile).then(() => {
            setEditMode(false);
        });
    };


    return <>
        <Row>
            <Col span={12} offset={6}>
                <img src={profile.photos.large || commonLogo} alt={'ava'} className={st.thisAva}/>
            </Col>
        </Row>
        <Row>
            <Col span={12} offset={6}>
                <ProfileStatus isOwner={isOwner}/>
            </Col>
        </Row>
        {/*<Row>*/}
        {/*    <Col span={12} offset={6}>*/}
        {/*        {isOwner && <Upload onChange={onMainPhotoSelected}>*/}
        {/*            <Button >*/}
        {/*                <UploadOutlined/> Click to Upload*/}
        {/*            </Button>*/}
        {/*        </Upload>}*/}
        {/*    </Col>*/}

        {/*</Row>*/}


        {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
            <ProfileData profile={profile} isOwner={isOwner} editMode={goToEditMode}/>}
        {/*{isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}*/}
        {/*<ProfileStatusClass status={props.status} updateStatus={props.updateStatus}/>*/}
    </>;

});


export default ProfileInfo;





