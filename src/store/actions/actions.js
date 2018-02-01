import * as Types from '../action-types'
import {getSliders} from '../../api/slider'
import {getHome} from '../../api/home'
let actions={
    getSlidersHQ(){
        return function (dispatch,getState) {
            dispatch({type:Types.GET_SLIDER,payload:getSliders()})
        }
    },
    getHomeListHQ(){
        return function (dispatch,getState) {
            dispatch({type:Types.GET_HOME_LIST,payload:getHome()})
        }
    }
};
export default  actions