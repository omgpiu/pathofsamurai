import React from 'react';
import st from './ProfileData.module.css';
import {ContactsType, NewProfileType} from '../../../../Types/Types';

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (<div>
        <b>{contactTitle}</b> : {contactValue}
    </div>);
};
const ProfileData: React.FC<ProfileDataType> = (props) => {


    const {profile, isOwner, editMode} = props;
    return <div className={st.description}>
        {isOwner && <div>
            <button onClick={editMode}>edit</button>
        </div>}
        <div>
            <b>Looking for a job</b> : {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b> : {profile.lookingForAJob}
        </div> && <div>
            <b>I'm looking for</b> : {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>Full Name</b> : {profile.fullName}
        </div>
        <div>
            <b>About me</b> : {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key}
                            contactValue={profile.contacts[key as keyof ContactsType]}/>;
        })}
        </div>
    </div>;
};
export default ProfileData;

type ProfileDataType = {
    profile: NewProfileType
    isOwner: boolean
    editMode: () => void
}
type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}