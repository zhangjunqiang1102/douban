import axios from './index';

//获取广播数据
export function getRadio (id){
    return axios.get(`radio${id}`)
}