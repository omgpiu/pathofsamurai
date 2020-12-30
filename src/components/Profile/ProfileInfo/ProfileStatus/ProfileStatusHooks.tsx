import React, {ChangeEvent, useEffect, useState} from 'react';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusHooks: React.FC<PropsType> = ({status, updateStatus}) => {

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
        updateStatus(localStatus);
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

export default ProfileStatusHooks;
