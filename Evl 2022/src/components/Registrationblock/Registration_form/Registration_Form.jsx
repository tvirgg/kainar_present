import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormsControls/FormsControls";
import classes from "./Registration_Form.module.css";
import classNames from "classnames";
import {requiredemail} from "../../utils/validators/email";
import {required} from "../../utils/validators/validators_pasword";
import axios from "axios";
import {ISEDDITINFORMATIONAC, PostUserData, SetCurrentDATA} from "../../../redux/state/Profile_reducer";
import {GetCategories, signupAC} from "../../../redux/state/App_reducer";
const Registration_Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <div>
                <Field placeholder={"Ваш логин"} name={"login"}
                       validate={null}
                       className={classNames(classes.form_item__name, classes.form_item)}
                       autocomplete="on"
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Ваш пароль"} validate={required} name={"password"} component={Input} className={classNames(classes.form_item_email, classes.form_item)}/>
            </div>
            <div>
                <button className={classes.reg_block_main_left_on_post_btn}>Создать аккаунт</button>
            </div>
        </form>
    );
}
const LoginReduxForm =  reduxForm({form: 'login'})(Registration_Form)

const Login = (props) => {
    const onSubmit = async (formData) => {
        console.log(formData.login, formData.password);

        const response = await axios.post(`https://video.knightdomservers.com/api/auth/signup`, {
            login: formData.login,
            password: formData.password
        })

        const userData = response.data;
        props.signupAC(userData);
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const DispatchToProps = (dispatch) => {
    return {
        signupAC: (mode) =>{
            dispatch(signupAC(mode));
        }
    };
};
export default connect(null, DispatchToProps)(Login);
