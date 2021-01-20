import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Coment from './coment';
import {connect} from "react-redux";
import {
    Bascket_checker,
    CounterUppercreater,
    GetInBascketCreater,
    PullOutBascketCreater,
    SendMessagecreator
} from '../../redux/state/DialogsData_reducer';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";



let DispatchToProps = (dispatch) =>{
    return{
        SendMessage: (text) =>{
            dispatch(SendMessagecreator(text));
        },
        CounterUpp: () =>{
            dispatch(CounterUppercreater());
        },
        GetInBascket: (goodobj) =>{
            dispatch(GetInBascketCreater(goodobj));
        },
        PullOutBascket: (goodobj) =>{
            dispatch(PullOutBascketCreater(goodobj));
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