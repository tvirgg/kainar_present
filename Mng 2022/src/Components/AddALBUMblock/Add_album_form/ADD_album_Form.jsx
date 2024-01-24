import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormsControls/FormsControls";
import {required} from "../../utils/validators/validators_pasword";
import classes from "./ADD_album_Form.module.css";
import classNames from "classnames";
import { getFormValues } from "redux-form";
import {AddnewAlmub, isAddnewAlmub} from "../../../redux/state/Profile_reducer";
const ADD_album_Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <div>
                <span className={classes.item_span}>
                    Название альбома:
                </span>
                <Field validate={required} name={"name"} component={Input} className={classNames(classes.form_item)}/>
            </div>
            <div>
                 <span className={classes.item_span}>
                    Доступ:
                </span>
                <Field Value={'Бесплатно для всех'} component={'select'} name={"secure"} className={classes.form_item} onChange={()=>{props.getFormValues()}}>
                    <option value='Бесплатно для всех'>Бесплатно для всех</option>
                    <option value='Только для зарегестрированных'>Только для зарегестрированных</option>a
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
                <Field name={"price"} validate={props.req && required} disabled component={Input} className={classNames(classes.form_item)} id="pricealbum"/>
            </div>
            <div>
                <button className={classes.reg_block_main_left_on_post_btn}>Создать альбом</button>
            </div>
        </form>
    );
}
const ADDReduxForm =  reduxForm({form: 'addalbum'})(ADD_album_Form)

const ADD = (props) => {
    let [req, setreq] = useState(false);
    let newid = props.MyAlbumes[props.MyAlbumes.length-1].id +1;
    const onSubmit = (formData) => {
        let photos={
            name: formData.name,
            secure: formData.secure,
            price: formData.price,
            photos:[],
            id: newid
        };
        props.AddnewAlmub(photos);
        props.isAddnewAlmub(false);
    }
    useEffect(() => {
        if (props.values){
            if (props.values.secure){
                if(props.values.secure == 'Платный'){
                    document.getElementById('pricealbum').disabled = false;
                    setreq(true);
                }else{
                    document.getElementById('pricealbum').disabled = true;
                    setreq(false);
                }
            }
        }
    },[props]);

    return <div>
        <ADDReduxForm onSubmit={onSubmit} getFormValues={getFormValues} req={req}/>
    </div>
}
const DispatchToProps = (dispatch) => {
    return {
        AddnewAlmub: (mode) =>{
            dispatch(AddnewAlmub(mode));
        },
        isAddnewAlmub: (mode) =>{
            dispatch(isAddnewAlmub(mode));
        }
    };
};
const mapStateToProps = state => {
    return {
        MyAlbumes: state.ProfileData.MyAlbumes,
        values: getFormValues("addalbum")(state)
    }
};
export default connect(mapStateToProps, DispatchToProps)(ADD);
