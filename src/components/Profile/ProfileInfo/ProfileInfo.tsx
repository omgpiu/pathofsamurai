import React from 'react';
import st from './ProfileInfo.module.css';
import logo2 from '../../../photo/logo2.png';
import {ProfileType} from '../../../Rdux/profile-reducer';
import PreLoader from '../../Users/preLoader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

type PropsType = {
    profile: ProfileType
    status:string
    updateStatus: (status:string)=>void
}

function ProfileInfo(props: PropsType) {
    if (!props.profile) {
        return <div><PreLoader/></div>;
    }
    return (
        <div>
            <div className={st.description}>
                {props.profile.photos.large ?
                    <div className={st.thisLogo}><img src={props.profile.photos.large} alt="Avatar"/></div>
                    : <div className={st.thisLogo}><img src={logo2} alt="Avatar"/></div>
                }

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}


export default ProfileInfo;