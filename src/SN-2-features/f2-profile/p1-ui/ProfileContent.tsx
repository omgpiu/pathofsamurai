import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import MyPosts from '../MyPosts/MyPosts';
import {NewProfileType} from '../../../Types/Types';
import {Col, Row} from 'antd';


export const Profile: React.FC<PropsType> = React.memo(({
                                                            savePhoto,
                                                            isOwner,
                                                            profile,
                                                            status,
                                                            updateStatus,
                                                            saveProfile
                                                        }) => {

    return (
        <>
            <Row>
                <Col span={12}>
                    <ProfileInfo savePhoto={savePhoto}
                                 isOwner={isOwner}
                                 profile={profile}
                                 status={status}
                                 updateStatus={updateStatus}
                                 saveProfile={saveProfile}
                    />
                </Col>
                <Col span={12}> <MyPosts/></Col>
            </Row>


        </>
    );

});
type PropsType = {
    profile: NewProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => Promise<any>
    saveProfile: (formData: any) => any

}

