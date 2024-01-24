import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Footer from "./Footer.jsx";
import {Setlenguage} from "../../redux/state/App_reducer";
import {SetCurrentchatmode} from "../../redux/state/Broadcast_reducer";
const DispatchToProps = (dispatch) => {
    return {
        Setbasiclenguage: (mode) => {
            dispatch(Setlenguage(mode));
        },
        SetCurrentchatmode: (mode) =>{
        dispatch(SetCurrentchatmode(mode));
    }
    };
};
const mapStateToProps = state => {
    return {
        menumode: state.AppData.globalmenumode,
        registermenu: state.AppData.registermenu,
        chatmode: state.BroadcastData.chatmode,
    }
};

class FotterContainer extends React.Component {
    render() {
        return <Footer SetCurrentchatmode={this.props.SetCurrentchatmode} chatmode={this.props.chatmode} registermenu={this.props.registermenu} globalmenumode={this.props.menumode} Setbasiclenguage={this.props.Setbasiclenguage} languagessint={this.props.languages}/>;
    }

}



export default compose(
    connect(mapStateToProps, DispatchToProps),
)(FotterContainer);
