import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//(props.profile.aboutMe != null)? props.profile.aboutMe : "Ничего в статусе"}
class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState( {
            editMode: true
        } );
    }
    deactivateEditMode = () =>{
        this.setState( {
            editMode: false
        } );
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    render(){
        return <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={ this.activateEditMode }>{this.props.status || "-------"}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.state.status}/>
            </div>
            }
        </div>
    }
}
export default ProfileStatus;