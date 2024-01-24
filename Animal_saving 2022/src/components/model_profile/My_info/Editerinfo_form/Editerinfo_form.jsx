import React, {forwardRef, useEffect, useState} from 'react';
import { Formik } from 'formik'
import * as yup from 'yup'
import classes from "./Editerinfo_form.module.css";
import "./Datepicker.css";
import {connect} from "react-redux";
import {ISEDDITINFORMATIONAC, PostUserData, SetCurrentDATA} from "../../../../redux/state/Profile_reducer";
import CustomSelect from "../../../utils/CustomSelect";


function Editerinfo_form(props) {
    let [agedate, isdate]= useState(new Date());
    let [appSelectin, setappSelectin]= useState(undefined);
    useEffect(()=>{
        isdate(Date.parse(props.birth_date));//переменная для демострации отображения даты
    },[props.birth_date]);
    useEffect(()=>{
        console.log(props.languages);
    },[]);
    const validationsSchema = yup.object().shape({
        name: yup.string().required('Обязательно'),
        gender: yup.string().required('Обязательно'),
        birth_date: yup.string().required('Обязательно')
    });

    useEffect(()=>{
        if (props.selectorsmass){
            setappSelectin(props.selectorsmass);
        }
    },[props.selectorsmass]);
    return (
        <div>
            <Formik
                initialValues={{
                    name: props.name,
                    gender: props.sex,
                }}
                onSubmit={(values) => {
                    let newobj = {
                        name: props.name,
                        sex: values.gender,
                    }
                    props.PostUserData(newobj);
                }}
                validationSchema={validationsSchema}
            >
                {({ values, errors, touched, setFieldValue, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div className={classes.form} >
                        <div className={classes.container_top}>
                            <span className={classes.container_h1}>
                                Моя информация
                            </span>
                            <button className={classes.save} disabled={!isValid} type={`submit`}
                                    onClick={handleSubmit}>
                                Сохранить
                            </button>
                        </div>
                        <div className={classes.form_block}>
                            <div className={classes.form_block_item}>
                                    <span className={classes.form_block_item_span}>
Имя:
                                    </span>
                                <div className={classes.form_block_item_sec_block}>
                                <input
                                    className={classes.form_item}
                                    name={`name`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                    {touched.name && errors.name && <p className={classes.eror}>{errors.name}</p>}
                                </div>
                            </div>
                            <div className={classes.form_block_item}>
                                    <span className={classes.form_block_item_span}>
Пол:
                                    </span>
                                <CustomSelect
                                    onChange={value=>setFieldValue('gender',value.value)}
                                    value={values.gender}
                                    type={`text`}
                                    options={[{value: 'Мужчины', label: 'Мужчины'},
                                        {value: 'Женщины', label: 'Женщины'},]}
                                />
                            </div>
                            {touched.gender && errors.gender && <p className={classes.eror}>{errors.gender}</p>}
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
}

const DispatchToProps = (dispatch) => {
    return {
        SetCurrentDATA: (mode) =>{
            dispatch(SetCurrentDATA(mode));
        },
        PostUserData: (mode) =>{
            dispatch(PostUserData(mode));
        },
        ISEDDITINFORMATIONAC: (mode) =>{
            dispatch(ISEDDITINFORMATIONAC(mode));
        }
    };
};
export default connect(DispatchToProps)(Editerinfo_form);
