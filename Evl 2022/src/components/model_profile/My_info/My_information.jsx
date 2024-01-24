import React, {useEffect, useState} from 'react';
import classes from "./My_information.module.css";
import {compose} from "redux";
import {connect} from "react-redux";
import {ISEDDITINFORMATIONAC, SetCurrentDATA} from "../../../redux/state/Profile_reducer.js";
import Editerinfo_form from "./Editerinfo_form/Editerinfo_form.jsx";
const mapStateToProps = state => {
    return {
        name: state.ProfileData.current_data.username,
        sex: state.ProfileData.current_data.gender,
        iseditprofileinfo: state.ProfileData.iseditprofileinfo
    }
};
const DispatchToProps = (dispatch) => {
    return {
        SetCurrentDATA: (mode) =>{
            dispatch(SetCurrentDATA(mode));
        },
        ISEDDITINFORMATIONAC: (mode) =>{
            dispatch(ISEDDITINFORMATIONAC(mode));
        }
    }}
const My_information = (props) => {
    useEffect(()=>{
           props.ISEDDITINFORMATIONAC(true);
    },[]);
    useEffect(()=>{
        props.ISEDDITINFORMATIONAC(true);
    },[]);
    return (
        <div className={classes.container}>
            {props.iseditprofileinfo &&
            <div className={classes.profile_container__info}>
                <div className={classes.container_top}>
                <span className={classes.container_h1}>
                    Моя Информация
                </span>
                    <a className={classes.edit} onClick={()=>{props.ISEDDITINFORMATIONAC(false)}}>
                        <svg className={classes.edit_Svg} height="14px" viewBox="0 0 100 100"><path d="M15.1 64.1L37.2 85.4 79.9 41.8 57.8 20.5z"/><path d="M31.5 91.3L9.4 69.9 0 100z"/><path d="M77.8 0L63.5 14.6 85.7 36 100 21.3z"/></svg>
                    </a>
                </div>
                <table className={classes.info_table}>
                    <tbody>
                    <tr><td className={classes.profile_container_lable}>Имя:</td><td>{props.name}</td></tr>
                    </tbody>
                    <tbody>
                    <tr><td  className={classes.profile_container_lable}>Пол</td><td>Мужской</td></tr>
                    </tbody>
                </table>
            </div>}
            {!props.iseditprofileinfo &&
            <Editerinfo_form name={props.name} sex={props.sex}/>
            }
        </div>
    );
}
export default compose(
    connect(mapStateToProps, DispatchToProps),
)(My_information);
