import React from 'react';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {
    getStatus,
    setProfilePage,
    updateStatus,
    savePhoto,
    saveProfile,
    SaveProfile
} from "../../redux/state/ProfileData-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component{
    refreshProfile (){
    let userId = this.props.match.params.userId;
    if (!userId) {
    userId = this.props.myuserid;
    if (!userId) {
    this.props.history.push("/login");
    }
    }
    this.props.setProfilePage(userId);
    this.props.getStatus(userId);
}

    componentDidMount()  {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile();
        }

    }

    render() {

        return <>
            <Profile SaveProfile={this.props.SaveProfile} isowner={!this.props.match.params.userId} {...this.props}  profile={this.props.profile} status={this.props.status}  updateStatus={this.props.updateStatus} SavePhoto={this.props.savePhoto}/>
            </>
    }
}
let mapStateToProps = (state) =>({
    profile: state.ProfileData.profile,
    status: state.ProfileData.status,
    myuserid: state.AuthData.id,
    isAuth: state.AuthData.isAuth
});



export default compose(
    connect(mapStateToProps, {setProfilePage, getStatus, updateStatus, savePhoto, SaveProfile}),
    withRouter
)(ProfileContainer);