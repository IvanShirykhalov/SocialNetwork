import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {StoreType} from "../../redux/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


// export const Dialogs = (props: DialogsPropsType) => {
//
//
//     const addMessage = () => props.addMessage()
//
//     const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.onChange(e.currentTarget.value)
//
//     const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
//         if (e.key === 'Enter') {
//             props.addMessage()
//         }
//     }
//
//     return (
//         props.isAuth
//             ?
//             <div className={s.dialogs}>
//                 <div className={s.dialogsItems}>
//                     {props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
//                 </div>
//                 <div className={s.messages}>
//                     {props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
//                     <div>
//                         <div><textarea
//                             placeholder={`Enter your Message...`}
//                             onKeyPress={onKeyPress}
//                             onChange={onChange}
//                             value={props.dialogsPage.newMessageText}
//
//                         /></div>
//                         <div>
//                             <button onClick={addMessage}>Send</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             :
//             <Redirect to="/login"/>
//
//     );
// };

export class Dialogs extends React.Component<DialogsPropsType, StoreType> {
    constructor(props: DialogsPropsType) {
        super(props);

    }

    addNewMessage = (value: { newMessageBody: string }) => {
        this.props.AddMessage(value.newMessageBody)
    }

    // addMessage = () => {
    //     this.props.addMessage()
    // }
    //onChange = (e: ChangeEvent<HTMLTextAreaElement>) => this.props.onChange(e.currentTarget.value)
    // onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.key === 'Enter') {
    //         this.props.addMessage()
    //     }
    // }


    render() {
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {this.props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
                </div>
                <div className={s.messages}>
                    {this.props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
                    <div>
                        <AddMessagesFormRedux onSubmit={this.addNewMessage}/>
                    </div>
                </div>
            </div>
        )
    }
}


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