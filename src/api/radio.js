import axios from './index';

//获取广播数据
export let getRadio =(id)=>{
    return axios.get(`radio${id}`)
};