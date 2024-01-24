import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Broadcast from "./Broadcast";
import {Setglobalmenu, Setregister} from "../../redux/state/App_reducer";
import {SETCURRENT_VideowatchAC, SetCurrentchatmode, SetCurrentphoto} from "../../redux/state/Broadcast_reducer";
const DispatchToProps = (dispatch) => {
    return {
        Setregister: (mode) =>{
            dispatch(Setregister(mode));
        },
        SetCurrentphoto: (mode) =>{
            dispatch(SetCurrentphoto(mode));
        },
        SetCurrentchatmode: (mode) =>{
            dispatch(SetCurrentchatmode(mode));
        },
        SETCURRENT_VideowatchAC: (mode) =>{
            dispatch(SETCURRENT_VideowatchAC(mode));
        }
    };
};
const mapStateToProps = state => {
    return {
        registermenu: state.AppData.registermenu,
        current_photo: state.BroadcastData.current_photo,
        chatmode: state.BroadcastData.chatmode,
        current_video: state.BroadcastData.current_video,
        current_data: state.ProfileData.current_data
    }
};

class BroadcastContainer extends React.Component {
    render() {
        return <Broadcast current_data={this.props.current_data} current_video={this.props.current_video} current_video_id={this.props.current_video.video_id} SetCurrentchatmode={this.props.SetCurrentchatmode} chatmode={this.props.chatmode} current_photo={this.props.current_photo} SetCurrentphoto={this.props.SetCurrentphoto} Setregister={this.props.Setregister} registermenu={this.props.registermenu}/>;
    }
}



export default compose(
    connect(mapStateToProps, DispatchToProps),
)(BroadcastContainer);
