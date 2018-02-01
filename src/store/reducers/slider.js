import  * as Types from '../action-types'
let initState={
    sliders:[],
    homeList:[]
}

function home(state=initState,action) {
    switch (action.type) {
        case Types.GET_SLIDER:
            return {...state, sliders: action.payload}
    }
    switch (action.type) {
        case Types.GET_HOME_LIST:
            return {...state, homeList: action.payload}
    }
    return state
}

export default home
