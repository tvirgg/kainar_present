import React from 'react';
import classes from "./Additalbum_block.module.css";
import {compose} from "redux";
import {connect} from "react-redux";
import ADD_album_Form from "./Additalbum_block_form/ADIT_album_Form";
import {isAddnewAlmub, isEDITALBUM} from "../../redux/state/Profile_reducer";
const DispatchToProps = (dispatch) => {
    return {
        isAddnewAlmub: (mode) =>{
            dispatch(isAddnewAlmub(mode));
        },
        isEDITALBUM: (mode) =>{
            dispatch(isEDITALBUM(mode));
        }
    };
};
const mapStateToProps = state => {
    return {
        MyAlbumes: state.ProfileData.MyAlbumes,
        edit_album: state.ProfileData.edit_album
    }
};

const ADDitalbumBLOCK = (props) => {
    let objectformedit = (mode, id)=>{
        let newibj={
            mode: mode,
            id: id
        }
        return newibj;
    }
    return (
        <div className={classes.reg_container}>
            <div className={classes.reg_block}>
                <div className={classes.reg_block_top}>
                    <div className={classes.reg_block_top_block}>
                        <span>
                            Изменить альбом {props.MyAlbumes[props.edit_album.id-1].name}
                        </span>
                        <a className={classes.close_block} onClick={() => {
                            props.isEDITALBUM(objectformedit(false, 0));
                        }}>
                            <svg className={classes.close} viewBox="0 0 100 100"><path d="M60.2 34.2L50 44.4 39.8 34.2c-1.5-1.5-4-1.5-5.6 0-1.5 1.5-1.5 4 0 5.6L44.4 50 34.2 60.2c-1.5 1.5-1.5 4 0 5.6 1.5 1.5 4 1.5 5.6 0L50 55.6l10.2 10.2c1.5 1.5 4 1.5 5.6 0 1.5-1.5 1.5-4 0-5.6L55.6 50l10.2-10.2c1.5-1.5 1.5-4 0-5.6-1.6-1.5-4.1-1.5-5.6 0z"/><path d="M50 10.5c-21.8 0-39.5 17.7-39.5 39.5S28.2 89.5 50 89.5 89.5 71.8 89.5 50 71.8 10.5 50 10.5zm0 89.5C22.4 100 0 77.6 0 50S22.4 0 50 0s50 22.4 50 50-22.4 50-50 50z"/></svg>
                        </a>
                    </div>
                </div>
                <div className={classes.reg_block_main}>
                    <ADD_album_Form name={props.MyAlbumes[props.edit_album.id-1].name} id={props.edit_album.id} secure={props.MyAlbumes[props.edit_album.id-1].secure} price={props.MyAlbumes[props.edit_album.id-1].price}/>
                </div>
            </div>
        </div>
    );
}
export default compose(
    connect(mapStateToProps, DispatchToProps),
)(ADDitalbumBLOCK);
