import {appReducer, InitialAppStateType, initializedSuccess} from "./app-reducer";

let startState: InitialAppStateType

beforeEach(() => {
    startState = {
        initialized: false
    }
})


test('initialized should be changed', ()=>{


    const endState = appReducer(startState, initializedSuccess())

    expect(startState.initialized).toBe(false)
    expect(endState.initialized).toBe(true)
})
