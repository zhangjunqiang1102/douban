import * as Types from '../action-types';
import {getGroup} from '../../api/group';

let actions={
    getGroupApi(){
        return function (dispatch,getState) {
            dispatch({type:Types.SELECT_GROUP,payload:getGroup()})
        }
    }
};
export default actions

