import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type AddPostFormDataType = {
    newPostBody: string
}

const maxLength = maxLengthCreator(30)

const AddPostForm = (props: InjectedFormProps<AddPostFormDataType>) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newPostBody'}
                    placeholder={'Enter your new post'}
                    validate={[requiredField, maxLength,]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const AddPostFormRedux = reduxForm<AddPostFormDataType>({form: 'profileAddPostForm'})(AddPostForm)