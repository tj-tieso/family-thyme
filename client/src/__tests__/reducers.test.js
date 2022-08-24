import { reducer } from '../utils/reducers';
import { ADD_EVENT, REMOVE_EVENT, UPDATE_EVENT } from '../utils/actions';

const initialState = {
    events:  []
};

test("ADD_EVENT", () => {
    let newState = reducer(initialState, {
        type: ADD_EVENT,
        events: [{}, {}]
    })

    expect(newState.events.length).toBe(2)
    expect(initialState.events.length).toBe(0)
})