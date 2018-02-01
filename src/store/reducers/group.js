import * as Types from '../action-types'

let initState = {
    group: []
};

function group(state = initState, action) {
    switch (action.type) {
        case Types.SELECT_GROUP:
            return {...state, group: action.payload}
    }
    return state;
}

export default group