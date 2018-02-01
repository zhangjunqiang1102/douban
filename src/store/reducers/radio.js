import * as Types from '../action-types';

function radio(state = [], action) {
    switch (action.type) {
        case Types.GET_RADIO:
            return [...state,...action.payload]
    }
    return state;
}

export default radio;