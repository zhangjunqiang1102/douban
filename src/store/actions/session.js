import * as Types from '../action-types';
import {toReg, toLogin, toValidate} from '../../api/session'

let actions = {
  toRegAPI(username, password, history) {

    return function (dispatch, getState) {
      toReg(username, password).then(function (data) {
        dispatch({type: Types.SET_USER_INFO, user: data});
        if (data.err === 0) {
          setTimeout(() => {
            history.push('/login');
          }, 1000)
        }
      });
    }
  },
  clearMessage() {
    return {type: Types.CLEAR_MESSAGE, info: {msg: '', success: '', err: 0}}
  },
  toLoginAPI(username, password, history) {
    return function (dispatch, getState) {
      toLogin(username, password).then(function (data) {
        dispatch({type: Types.SET_USER_INFO, user: data});
        if (data.err === 0) {
          setTimeout(() => {
            history.push('/home');
          }, 1000)
        }
      })
    }
  },
  toValidateAPI() {
    return function (dispatch, getState) {
      toValidate().then(function (data) {
        dispatch({type: Types.SET_USER_INFO, user: data})
      });

    }
  }
};
export default actions