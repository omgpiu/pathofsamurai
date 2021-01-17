import React from 'react';
import {NewProfileType} from '../../../../Types/Types';
import st from '../ProfileData/ProfileData.module.css';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, MyInput, Textarea} from '../../../../SN-3-common/FormControls/FormControls';
import {Button} from 'antd';

type PropsType = {
    profile: NewProfileType

}
const ProfileDataForm: React.FC<InjectedFormProps<NewProfileType, PropsType> & PropsType> = ({
                                                                                                 profile,
                                                                                                 handleSubmit,
                                                                                                 error

                                                                                             }) => {
    return <form>
        <div className={st.description}>
            <div>
                <Button onClick={handleSubmit} type='primary'>Save</Button>
                {error && <div>{error}</div>}
            </div>
            <div>
                <b>Full Name</b>: {createField('Full name', 'fullName', [], MyInput)}
            </div>
            <div>
                <b>Looking for a job</b> :{createField('', 'lookingForAJob', [], MyInput, {type: 'checkbox'})}
            </div>

            <div>
                <b>My professional
                    skills</b> : {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me</b> :{createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>You can find me there</b> : {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}:</b> {createField(key, 'contacts.' + key, [], MyInput)}

                </div>;
            })}
            </div>
        </div>
    </form>;
};

const ProfileDataFormRedux = reduxForm<NewProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormRedux;
