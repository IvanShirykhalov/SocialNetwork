import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {StoreType} from "../../redux/redux-store";
import {AddMessagesFormRedux} from "./AddMessageForm";


export const Dialogs = (props: DialogsPropsType) => {


    const addNewMessage = (value: { newMessageBody: string }) => {
        debugger
        props.addMessage(value.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
                <div>
                    <AddMessagesFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
};

// export class Dialogs extends React.Component<DialogsPropsType, StoreType> {
//     constructor(props: DialogsPropsType) {
//         super(props);
//
//     }
//
//     addNewMessage(value: { newMessageBody: string }) {
//         debugger
//         this.props.addMessage(value.newMessageBody)
//     }
//
//     render() {
//         return (
//             <div className={s.dialogs}>
//                 <div className={s.dialogsItems}>
//                     {this.props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
//                 </div>
//                 <div className={s.messages}>
//                     {this.props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
//                     <div>
//                         <AddMessagesFormRedux onSubmit={this.addNewMessage}/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


