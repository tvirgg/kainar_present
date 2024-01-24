import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./Header.jsx";

import {
    Setglobalmenu,
    SetLOGINblock,
    Setregistrationblock,
    SET_ISAUTHAC,
    LOGOUTAC,
    isAUTHAC,
    Setblock,
} from "../../redux/state/App_reducer.js";
const DispatchToProps = (dispatch) => {
    return {
        Hidemenu: (mode) =>{
            dispatch(Setglobalmenu(mode));
        },
        SetRegistrationblock: (mode) =>{
            dispatch(Setregistrationblock(mode));
        },
        SetLOGINblock: (mode) =>{
            dispatch(SetLOGINblock(mode));
        },
        LOGOUTAC: () =>{
            dispatch(LOGOUTAC());
        },
        SET_ISAUTHAC: (mode) =>{
            dispatch(SET_ISAUTHAC(mode));
        },
        isAUTHAC: (mode) =>{
            dispatch(isAUTHAC(mode));
        },
        Setblock: (mode) =>{
            dispatch(Setblock(mode));
        }
    };
};
const mapStateToProps = state => {
    return {
        menumode: state.AppData.globalmenumode,
        blockscren: state.AppData.blockscren,
        registrationForm: state.AppData.registrationForm,
        isauth: state.AppData.isauth,
        nick: state.ProfileData.current_data.username,
        registermenu: state.AppData.registermenu,
        profilePhoto: state.ProfileData.current_data.avatar,
    }
};

class HeaderContainer extends React.Component {
    render() {

        return <Header categories={this.props.categories} appText={this.props.appText} registermenu={this.props.registermenu} Setblock={this.props.Setblock} nick={this.props.nick} profilePhoto={this.props.profilePhoto} isAUTHAC={this.props.isAUTHAC} LOGOUTAC={this.props.LOGOUTAC} SET_ISAUTHAC={this.props.SET_ISAUTHAC} isauth={this.props.isauth} registrationForm={this.props.registrationForm} blockscren={this.props.blockscren} globalmenumode={this.props.menumode} Hidemenu={this.props.Hidemenu} SetRegistrationblock={this.props.SetRegistrationblock} SetLOGINblock={this.props.SetLOGINblock}/>;
    }
}


export default compose(
    connect(mapStateToProps, DispatchToProps),
)(HeaderContainer);
