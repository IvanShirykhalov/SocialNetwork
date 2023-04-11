import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

type AddPostFormDataType = {
    newPostBody: string
}

const AddPostForm = (props: InjectedFormProps<AddPostFormDataType>) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newPostBody'}
                    placeholder={'Enter your message'}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const AddPostFormRedux = reduxForm<AddPostFormDataType>({form: 'profileAddPostForm'})(AddPostForm)