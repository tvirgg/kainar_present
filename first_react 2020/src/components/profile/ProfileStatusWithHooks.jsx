import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
const ProfileStatusWithHooks  = (props) => {
    let [editmode, Seteditmode] = useState(false);
    let [status, Setstatus] = useState(props.status);
    useEffect( () => {
        Setstatus(props.status);
    }, [props.status] );
    const activateEditMode = () =>{
        Seteditmode(true);
    }
    const deactivateEditMode = () =>{
        Seteditmode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        Setstatus(e.currentTarget.value);
    }
        return <div>
            { !editmode && props.isowner &&//если это наша страница
            <div>
                <span onDoubleClick={ activateEditMode }>{props.status || "-------"}</span>
            </div>
            }
            {editmode && props.isowner &&//если это наша страница во время изменения статуса
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
            { !props.isowner &&//если это не наша страница
            <div>
                <span>{props.status || "-------"}</span>
            </div>
            }
        </div>
}
export default ProfileStatusWithHooks ;