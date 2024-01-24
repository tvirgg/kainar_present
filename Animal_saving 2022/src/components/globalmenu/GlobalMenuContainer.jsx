import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import GlobalMenu from "./GlobalMenu";
import {Setblock, Setglobalmenu, Setlenguage, Setregister} from "../../redux/state/App_reducer";

 class GlobalMenuContainer extends React.Component {
    render() {
        return <GlobalMenu Setblock={this.props.Setblock}  Setglobalmenu={this.props.Setglobalmenu} Setregister ={this.props.Setregister} registermenu={this.props.registermenu} globalmenu={this.props.menumode} Hidemenu={this.props.Hidemenu} Setbasiclenguage={this.props.Setbasiclenguage} language={this.props.language}/>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Setbasiclenguage: (mode) => {
            dispatch(Setlenguage(mode));
        },
        Setglobalmenu: (mode) => {
            dispatch(Setglobalmenu(mode));
        },
        Hidemenu: (mode) =>{
            dispatch(Setglobalmenu(mode));
        },
        Setblock: (mode) =>{
            dispatch(Setblock(mode));
        },
        Setregister: (mode) =>{
            dispatch(Setregister(mode));
        }
    }

};
const mapStateToProps = (state) => {
    return {
        menumode: state.AppData.globalmenumode,
        language: state.AppData.language,
        registermenu: state.AppData.registermenu,
        current_data: state.ProfileData.current_data
    }
};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(GlobalMenuContainer);
