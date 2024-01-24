import React, {useEffect, useRef} from 'react';
import { Formik } from 'formik'
import classes from "./Login_Form.module.css";
import {connect} from "react-redux";
import {loginAC, SET_LOGINERORAC} from "../../../redux/state/App_reducer";
import classNames from "classnames";
function Login_Form(props) {
    var form_itemclasses = classNames({
        [classes.form_item]: true,
        [classes.form_item_error]: true
    });
    var erorlogin = classNames({
        [classes.eror]: true,
        [classes.eror_live]: true
    });
    let ref = useRef();
    let secref = useRef();
    useEffect(()=>{
        ref.current.focus();
    },[]);
    return (
        <div>
            <Formik
                initialValues={{
                    login: '',
                    password: ''
                }}
                validateOnBlur
                onSubmit={(values) => {
                    props.loginAC(values);
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div className={classes.form}>
                        <div className={classes.form_item_block}>
                            <input
                                ref={ref}
                                onKeyPress={(e)=>{if (e.key === 'Enter'){
                                    if(values.password!==""){
                                        handleSubmit();
                                    }
                                    else{
                                        secref.current.focus();
                                    }
                                }}}
                                className={props.logineror || touched.password && errors.login? form_itemclasses: classes.form_item}
                                name={`login`}
                                placeholder={'Логин'}
                                onChange={(e)=>{handleChange(e);  props.SET_LOGINERORAC('');}}
                                onBlur={handleBlur}
                                value={values.login}
                            />
                            <p className={touched.login && errors.login? erorlogin: classes.eror}>{errors.login}</p>
                            <p className={ props.logineror !== '' && !errors.login ? erorlogin: classes.eror}>{props.logineror}</p>

                        </div>
                        <div className={classes.form_item_block}>
                            <input
                                onKeyPress={(e)=>{if (e.key === 'Enter') {
                                    handleSubmit();
                                }}}
                                ref={secref}
                                className={props.logineror || touched.password && errors.password? form_itemclasses: classes.form_item}
                                name={`password`}
                                placeholder={'Пароль'}
                                onChange={(e)=>{handleChange(e);  props.SET_LOGINERORAC('');}}
                                onBlur={handleBlur}
                                type={"password"}
                                value={values.password}
                            />
                            <p className={touched.password && errors.password? erorlogin: classes.eror}>{errors.password}</p>
                        </div>
                        <div>
                            <button className={classes.reg_block_main_left_on_post_btn} type={`submit`}
                                    onClick={handleSubmit}>
                                Войти
                            </button>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
}
const DispatchToProps = (dispatch) => {
    return {
        loginAC: (mode) =>{
            dispatch(loginAC(mode));
        },
        SET_LOGINERORAC: (mode) =>{
            dispatch(SET_LOGINERORAC(mode));
        }
    };
};
const mapStateToProps = (state) => ({
    logineror: state.AppData.logineror
});
export default connect(mapStateToProps, DispatchToProps)(Login_Form);
