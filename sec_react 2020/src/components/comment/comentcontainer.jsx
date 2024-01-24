import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Coment from './coment';
import {connect} from "react-redux";
import {SendMessagecreator} from '../../redux/state/DialogsData_reducer';
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";



let DispatchToProps = (dispatch) =>{
    return{
        SendMessage: (text) =>{
            dispatch(SendMessagecreator(text));
        }
    }
}
let mapStateToProps = (state) => {
    return {
        DialogsData: state.DialogsData
    }
}
export default compose(
    connect(mapStateToProps, DispatchToProps),
withAuthRedirect
)(Coment);

