import { Action } from '../../types/store/actions/counter';
import { INCREMENTED, DECREMENTED } from '../constants/counter';

export const increment = (): Action<any> => {
    return {
        type: INCREMENTED,
    };
};

export const decrement = (): Action<any> => {
    return {
        type: DECREMENTED,
    };
};
