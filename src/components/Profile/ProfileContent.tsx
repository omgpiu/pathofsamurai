import React from 'react';
import '../../App.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {NewProfileType} from '../../Types/Types';
import ProfileInfo from './ProfileInfo/ProfileInfo';


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
            <MyPostsContainer/>
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

