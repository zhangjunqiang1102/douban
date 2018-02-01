import *as Types from '../action-types';
import {getBook} from '../../api/book'
let actions = {
    getBookAPI() {
       return function (dispatch,getState) {
           dispatch({type:Types.GET_BOOK,payload:getBook()});
       }
    }
}
export default actions

