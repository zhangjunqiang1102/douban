import * as Types from '../action-types';
import {getRadio} from '../../api/radio';

let actions = {
    getRadioAPI() {
        return function (dispatch, getState) {
            dispatch({type: Types.GET_RADIO, payload: getRadio()});
        }
    }
};
export default actions;