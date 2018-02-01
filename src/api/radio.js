import axios from './index';

//获取广播数据
export let getRadio =()=>{
    return axios.get(`/radio`)
};