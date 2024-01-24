import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../FormsControls/FormsControls";
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       placeholder='Enter your message' name="newMessageBody" />
            </div>
            <button>Send</button>
        </form>
    )
}
const MassageReduxForm = reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);

export  const Massageform = (props) => {
    return <div>
        <MassageReduxForm onSubmit={props.SendMessage} />
    </div>
}