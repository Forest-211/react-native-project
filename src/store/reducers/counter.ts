import { INCREMENTED, DECREMENTED } from '../constants/counter';

interface InitinalCounterState {
    counter: number;
}
const initialCounterState: InitinalCounterState = {
    counter: 1,
};

type Acation = {
    type: string;
};

const counterReducer = (state = initialCounterState, action: Acation) => {
    switch (action.type) {
        case INCREMENTED:
            return { counter: state.counter + 1 };
        case DECREMENTED:
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};

export default counterReducer;
