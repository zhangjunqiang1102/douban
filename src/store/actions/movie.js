import *as Types from '../action-types';
import {getMovie} from '../../api/movie'
let actions = {
    getMovieAPI() {
       return function (dispatch,getState) {
           dispatch({type:Types.GET_MOVIE,payload:getMovie()});
       }
    }
}
export default actions

