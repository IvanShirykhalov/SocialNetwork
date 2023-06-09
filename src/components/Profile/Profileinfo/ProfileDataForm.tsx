import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";



const ProfileDataForm = (props: InjectedFormProps) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>save</button>
        </div>
        <div>
            <div><b>My name :</b>{createField('Full name', 'fullName', [], Input)}</div>
            <div><b>About me :</b>{createField('About me', 'aboutMe', [], Textarea)}</div>
            <div>
                {/*<b>Contacts : {Object*/}
                {/*    .keys(props.profile.contacts)*/}
                {/*    .map((key) => <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>)}*/}
                {/*</b>*/}
            </div>
            <div><b>Looking for a job :</b> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}</div>
            <div><b>My professional skills:</b> {createField('skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
        </div>
    </form>
}

export const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)