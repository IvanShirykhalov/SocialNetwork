import {DialogsPageType} from "../components/Dialogs/DialogsContainer";
import {v1} from "uuid";
import {addMessage, deleteMessage, dialogsReducer} from "./dialogs-reducer";


let startState: DialogsPageType
beforeEach(() => {
    startState = {
        dialogs: [
            {id: v1(), name: 'Oleg'},
            {id: v1(), name: 'Vladimir'},
            {id: v1(), name: 'Petr'},
            {id: v1(), name: 'Fedor'},
            {id: v1(), name: 'Alexander'},
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: '2', message: 'Hello'},

        ],
    }
})

test('message should be added', ()=>{

    const endState = dialogsReducer(startState, addMessage('hi'))

    expect(startState.messages.length).toBe(2)
    expect(endState.messages.length).toBe(3)
})

test('messages should be deleted', ()=>{

    const endState = dialogsReducer(startState, deleteMessage('2'))

    expect(startState.messages.length).toBe(2)
    expect(endState.messages.length).toBe(1)
})