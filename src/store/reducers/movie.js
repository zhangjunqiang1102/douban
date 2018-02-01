import * as Types from '../action-types'

let initState={
    hot:[]
}
function movie(state=initState,action) {
    switch (action.type){
        case Types.GET_MOVIE:
            return {...state,hot:action.payload};
    }
    return {...state};
}
export default movie;