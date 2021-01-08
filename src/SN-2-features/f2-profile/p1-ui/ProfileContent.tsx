import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import MyPosts from '../MyPosts/MyPosts';
import {NewProfileType} from '../../../Types/Types';


export const Profile: React.FC<PropsType> = React.memo(({
                                                            savePhoto,
                                                            isOwner,
                                                            profile,
                                                            status,
                                                            updateStatus,
                                                            saveProfile
                                                        }) => {

    return (
        <div>
            <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile}
                         status={status} updateStatus={updateStatus}
                         saveProfile={saveProfile}

            />
            <MyPosts/>
        </div>
    );

});
type PropsType = {
    profile: NewProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: any) => any

}

