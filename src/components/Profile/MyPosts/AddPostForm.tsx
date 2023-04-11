import {Field, reduxForm} from "redux-form";
import React from "react";

type AddPostFormDataType = {
    newMessageBody: string
}

const AddPostForm = (props: any) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={' '}
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