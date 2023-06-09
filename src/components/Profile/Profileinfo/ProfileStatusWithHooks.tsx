import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = React.memo((props: ProfileStatusType) => {


    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const toggleEditMode = () => {
        setEditMode(!editMode)
        props.updateStatus(status)
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    return (
        <div>
            {!editMode
                ?
                <div>
                    <b>Status :</b><span onDoubleClick={toggleEditMode}>{props.status || 'No status'}</span>
                </div>
                :
                <div>
                    <input
                        onChange={onChangeStatus}
                        autoFocus={true}
                        onBlur={toggleEditMode}
                        value={status}/>
                </div>
            }
        </div>
    );

})
