import React, {ChangeEvent, useEffect, useState} from 'react';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusHooks: React.FC<PropsType> = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);


    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };


    return (
        <div>
            {!editMode && <div>
                <b>Status</b> <span onDoubleClick={activateEditMode}>{props.status || 'What are you doing?'}</span>
            </div>}
            {editMode && <div><input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode}
                                     value={status}/></div>}
        </div>
    )
        ;

};

export default ProfileStatusHooks;