import React from 'react';
import {NewProfileType} from '../../../../Types/Types';
import st from '../ProfileData/ProfileData.module.css';


type ProfileDataFormType = {
    profile: NewProfileType
    isOwner: boolean

}
const ProfileDataForm: React.FC<ProfileDataFormType> = (props) => {
    const {profile} = props;
    return <form>
        <div className={st.description}>
            <div>
                <button onClick={() => {
                }}>Save
                </button>
            </div>
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
                {/*    <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {*/}
                {/*    return <Contact key={key} contactTitle={key}*/}
                {/*                    contactValue={profile.contacts[key as keyof ContactsType]}/>;*/}
                {/*})}*/}
            </div>
        </div>
    </form>;
};

export default ProfileDataForm;