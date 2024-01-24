import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
const maxLength10 = maxLengthCreator(10);
const AddPostMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageBody" component={Textarea} placeholder={"Enter your message"} validate={[required, maxLength10]} />
            </div>
            <button>Send</button>
        </form>
    )
}
const PostReduxForm = reduxForm({form: 'dialog-add-message-form'})(AddPostMessageForm);

export  const Postform = (props) => {
    return <div>
        <PostReduxForm onSubmit={props.addPost} />
    </div>
}