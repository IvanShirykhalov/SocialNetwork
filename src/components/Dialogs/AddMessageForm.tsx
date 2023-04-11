import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

type AddMessageFormDataType = {
    newMessageBody: string
}
const AddMessageForm = (props: InjectedFormProps<AddMessageFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={`Enter your Message...`}
                    component={'textarea'}
                    name={'newMessageBody'}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>

    )
}
export const AddMessagesFormRedux = reduxForm<AddMessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)