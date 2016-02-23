import { INCREMENT, DECREMENT } from '../actions'

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
    return state;
}

export default rootReducer
