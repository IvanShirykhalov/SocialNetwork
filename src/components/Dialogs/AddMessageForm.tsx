import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

type AddMessageFormDataType = {
    newMessageBody: string
}

const maxLength = maxLengthCreator(10)

const AddMessageForm = (props: InjectedFormProps<AddMessageFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={`Enter your Message...`}
                    component={'textarea'}
                    name={'newMessageBody'}
                    validate={[requiredField, maxLength,]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>

    )
}
export const AddMessagesFormRedux = reduxForm<AddMessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)