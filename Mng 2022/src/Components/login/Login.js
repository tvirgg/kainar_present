import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {SetLOGINblock, SetregistrationMODELblock} from "../../redux/state/App_reducer";
import classes from "./Login.module.css";
import Registration_Form from "../Loginblock/Login_form/Login_Form.jsx";
import classNames from "classnames";
const DispatchToProps = (dispatch) => {
    return {
        SetregistrationMODELblock: (mode) =>{
            dispatch(SetregistrationMODELblock(mode));
        },
        SetLOGINblock: (mode) =>{
            dispatch(SetLOGINblock(mode));
        },
    };
};
const mapStateToProps = state => {
    return {
        videos: state.Broadcast_listData.videos,
        isauth: state.AppData.isauth
    }
};
const Login = (props) => {
    useEffect(()=>{
        props.SetLOGINblock(false);
    },[]);
    useEffect(()=>{
    },[props.isauth]);
    return(
        <div className={classes.reg_container}>
            <div className={classes.reg_block}>
                <div className={classes.reg_block_top}>
                    <div className={classes.reg_block_top_block}>
                        <h1>
                            Вход
                        </h1>
                    </div>
                </div>
                <div className={classes.reg_block_main}>
                    <div className={classes.reg_block_main_left}>
                        <Registration_Form/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default compose(
    connect(mapStateToProps, DispatchToProps),
)(Login);
