import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormsControls";
import style from "./../FormsControls/FormsControls.module.css";
const Profile_data_form = (props) =>{
    return         <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Fulname"} name={"fullName"}
                   validate={[]}
                   component={Input}/>
        </div>

        <div>
            <Field component={Input} name={"lookingForAJob"} type={"checkbox"}/>
        </div>
        <div>
            <Field placeholder={"My skills"} name={"lookingForAJobDescription"}
                   validate={[]}
                   component={Input}/>
        </div>
        <div>
            <Field placeholder={"AboutMe"} name={"aboutMe"}
                   validate={[]}
                   component={Input}/>
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <div key={key} >
                <b> {key}: { <Field placeholder={key} name={"contacts." + key} validate={[]} component={Input}/> } </b>

            </div>
                })}
        </div>
        { props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>
        }
        <div>
            <button>Login</button>
        </div>

    </form>
}
const Profile_data_formReduxForm =  reduxForm({form: 'edit_profile_data'})(Profile_data_form)
export default Profile_data_formReduxForm;