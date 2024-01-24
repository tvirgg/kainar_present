import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormsControls/FormsControls";
import {required} from "../../utils/validators/validators_pasword";
import classes from "./ADIT_album_Form.module.css";
import classNames from "classnames";
import { getFormValues } from "redux-form";
import {isEDITALBUM, SET_ALTREDALBUMAC} from "../../../redux/state/Profile_reducer";
const ADIT_album_Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <div>
                <span className={classes.item_span}>
                    Название альбома:
                </span>
                <Field name={"name"} Value={props.name} component={Input} className={classNames(classes.form_item)}/>
            </div>
            <div>
                 <span className={classes.item_span}>
                    Доступ:
                </span>
                <Field component={'select'} name={"secure"} className={classes.form_item} onChange={()=>{props.getFormValues()}}>
                    <option value={props.secure}>{props.secure}</option>
                    <option value='Бесплатно для всех' >Бесплатно для всех</option>
                    <option value='Только для зарегестрированных'>Только для зарегестрированных</option>
                    <option value='Только для друзей'>Только для друзей</option>
                    <option value='Платный'>Платный</option>
                    <option value='Только для подписчиков фанклуба'>Только для подписчиков фанклуба</option>
                    <option value='Неопублекованные'>Неопублекованные</option>
                </Field>
            </div>
            <div>
                <span className={classes.item_span}>
                    Стоимость доступа:
                </span>
                <Field name={"price"} validate={props.req && required} Value={props.price ? props.price : ''}  disabled component={Input} className={classNames(classes.form_item)} id="pricealbumedit"/>
            </div>
            <div>
                <button className={classes.reg_block_main_left_on_post_btn}>Изменить альбом</button>
            </div>
        </form>
    );
}
const ADDReduxForm =  reduxForm({form: 'editalbum'})(ADIT_album_Form)

const ADDS = (props) => {
    let [req, setreq] = useState(false);
    const onSubmit = (formData) => {
        let photos={
            name: formData.name,
            secure: formData.secure,
            price: formData.price,
            id: props.id
        };
        let objectformedit = (mode, id)=>{
            let newibj={
                mode: mode,
                id: id
            }
            return newibj;
        }
        props.isEDITALBUM(objectformedit(false, 0));
        props.SET_ALTREDALBUMAC(photos);
    }
    useEffect(() => {
            if (props.values){
                if(props.values.secure == 'Платный'){
                    document.getElementById('pricealbumedit').disabled = false;
                    setreq(true);
                }else{
                    document.getElementById('pricealbumedit').disabled = true;
                    setreq(false);
                }
            }else{
                if(props.secure){
                    if(props.secure == 'Платный'){
                        document.getElementById('pricealbumedit').disabled = false;
                        setreq(true);
                    }else{
                        document.getElementById('pricealbumedit').disabled = true;
                        setreq(false);
                    }}
            }
    },[props.values, props.secure]);

    return <div>
        <ADDReduxForm name={props.name} id={props.id} secure={props.secure} price={props.price} onSubmit={onSubmit} getFormValues={getFormValues} req={req}/>
    </div>
}
const DispatchToProps = (dispatch) => {
    return {
        SET_ALTREDALBUMAC: (mode) =>{
            dispatch(SET_ALTREDALBUMAC(mode));
        },
        isEDITALBUM: (mode) =>{
            dispatch(isEDITALBUM(mode));
        }
    };
};
const mapStateToProps = state => {
    return {
        MyAlbumes: state.ProfileData.MyAlbumes,
        values: getFormValues("editalbum")(state)
    }
};
export default connect(mapStateToProps, DispatchToProps)(ADDS);
