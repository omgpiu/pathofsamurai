import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getStatus} from '../../../../Rdux/profile-selectors';
import {updateUserStatus} from '../../../../Rdux/profile-reducer';


type PropsType = {}

const ProfileStatus: React.FC<PropsType> = () => {
    const dispatch = useDispatch()
    const status = useSelector(getStatus)

    const [editMode, setEditMode] = useState(false);
    const [localStatus, setStatus] = useState(status);


    useEffect(() => {
        setStatus(status);
    }, [status]);


    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        dispatch(updateUserStatus(localStatus));
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode && <div>
                <b>Status</b> <span onDoubleClick={activateEditMode}>{status || 'What are you doing?'}</span>
            </div>}
            {editMode && <div><input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode}
                                     value={localStatus}/></div>}
        </div>
    )
        ;

};

export default ProfileStatus;
