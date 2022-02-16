import {initialStateType, newMessageTextAC, sendMessageAC} from "../../Redux/dialogsReducer";
import {Dispatch} from "redux";
import {StateType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";



/*type DialogsContainerPropsType = {
    messageText: string
    store: Store<StateType, ActionsType>

}

/!*export function DialogsContainer() {


    return (
        <StateContext.Consumer>
            {(state: StateType) => {

                const sendMessage = () => {

                    store.dispatch(sendMessageAC(state.dialogsPage.newMessageText))
                }


                const newMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {

                    store.dispatch(newMessageTextAC(e.currentTarget.value))
                }

                return (
                    <Dialogs newMessageValue={state.dialogsPage.newMessageText}
                             sendMessage={sendMessage}
                             newMessageText={newMessageText}
                             dialogsPage={state.dialogsPage}
                    />)
            }
            }

        </StateContext.Consumer>
    )
}*!/*/

export type dialogsMapStateToProps = {
    dialogsPage: initialStateType
}
export type dialogsMapDispatchToPropsType = {
    sendMessage: () => void
    newMessageText: (newMessageText: string) => void
}

export type DialogsContainerPropsType = dialogsMapStateToProps & dialogsMapDispatchToPropsType

const mapStateToProps = (state: StateType):dialogsMapStateToProps  => {
    return {
        dialogsPage: state.dialogsPage
    }

}
const mapDispatchToProps = (dispatch: Dispatch): dialogsMapDispatchToPropsType => {
    return {
        sendMessage: () => {
            console.log('sendMessage')
            dispatch(sendMessageAC())
        },

        newMessageText: (newMessage: string)  => {
            dispatch(newMessageTextAC(newMessage))
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
