import * as Types from '../action-types'

let initState={
    books:[]
}
function book(state=initState,action) {
    switch (action.type){
        case Types.GET_BOOK:
            return {...state,books:action.payload};
    }
    return {...state};
}
export default book;