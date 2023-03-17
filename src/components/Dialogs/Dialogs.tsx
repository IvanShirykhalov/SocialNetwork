import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {StoreType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


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

    addMessage = () => {
        this.props.addMessage()
    }

    onChange = (e: ChangeEvent<HTMLTextAreaElement>) => this.props.onChange(e.currentTarget.value)

    onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            this.props.addMessage()
        }
    }


    render() {
        return (
            this.props.isAuth
                ?
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        {this.props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
                    </div>
                    <div className={s.messages}>
                        {this.props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
                        <div>
                            <div><textarea
                                placeholder={`Enter your Message...`}
                                onKeyPress={this.onKeyPress}
                                onChange={this.onChange}
                                value={this.props.dialogsPage.newMessageText}

                            /></div>
                            <div>
                                <button onClick={this.addMessage}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <Redirect to="/login"/>
        )
    }
}
